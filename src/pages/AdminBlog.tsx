import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import AdminShell, { useAdmin } from "@/components/admin/AdminShell";
import {
  ImagePlus,
  Loader2,
  PenSquare,
  Plus,
  Search,
  Trash2,
  UploadCloud,
  X,
} from "lucide-react";
import {
  ApiBlogPost,
  BlogPostInput,
  createBlog,
  deleteBlog,
  getToken,
  listBlogs,
  updateBlog,
  uploadImage,
} from "@/lib/blogApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// The backend has no category field, so the category lives in the slug prefix.
const CATEGORIES = [
  { value: "none", label: "General (Latest)", prefix: "" },
  { value: "bookkeeping", label: "Bookkeeping", prefix: "bookkeeping-" },
  { value: "taxation", label: "Taxation", prefix: "taxation-" },
  { value: "payroll", label: "Payroll", prefix: "payroll-" },
  { value: "financial-analysis", label: "Financial Analysis", prefix: "financial-analysis-" },
];

const categoryOf = (slug: string | null) =>
  CATEGORIES.find((c) => c.prefix && slug?.startsWith(c.prefix)) ?? CATEGORIES[0];

const slugify = (t: string) =>
  t.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const empty: BlogPostInput = {
  title: "",
  slug: "",
  summary: "",
  content: "",
  coverImageUrl: "",
  authorName: "",
  isPublished: true,
  publishedAtUtc: null,
};

const toInput = (p: ApiBlogPost): BlogPostInput => ({
  title: p.title,
  slug: p.slug ?? "",
  summary: p.summary ?? "",
  content: p.content ?? "",
  coverImageUrl: p.coverImageUrl ?? "",
  authorName: p.authorName ?? "",
  isPublished: p.isPublished,
  publishedAtUtc: p.publishedAtUtc,
});

const fmtDate = (d?: string | null) =>
  d
    ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "";

type Filter = "all" | "published" | "draft";

const Editor = () => {
  const { expired: onExpired } = useAdmin();
  const [posts, setPosts] = useState<ApiBlogPost[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [form, setForm] = useState<BlogPostInput>(empty);
  const [baseline, setBaseline] = useState<BlogPostInput>(empty);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [slugTouched, setSlugTouched] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [pendingSwitch, setPendingSwitch] = useState<ApiBlogPost | "new" | null>(null);
  const [toDelete, setToDelete] = useState<ApiBlogPost | null>(null);
  const [deleting, setDeleting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLFormElement>(null);

  const dirty = useMemo(() => JSON.stringify(form) !== JSON.stringify(baseline), [form, baseline]);
  const category = categoryOf(form.slug);
  const words = form.content?.trim() ? form.content.trim().split(/\s+/).length : 0;

  const fail = useCallback(
    (e: unknown) => {
      if (!getToken()) return onExpired();
      const msg = (e as Error).message;
      toast.error(msg === "Failed to fetch" ? "Can't reach the server. Please try again." : msg);
    },
    [onExpired],
  );

  const load = useCallback(async () => {
    try {
      setLoadError(false);
      const list = await listBlogs(true);
      setPosts(
        [...list].sort(
          (a, b) =>
            +new Date(b.publishedAtUtc ?? b.createdAtUtc ?? 0) -
            +new Date(a.publishedAtUtc ?? a.createdAtUtc ?? 0),
        ),
      );
    } catch {
      setLoadError(true);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  const open = (p: ApiBlogPost | "new") => {
    const next = p === "new" ? empty : toInput(p);
    setForm(next);
    setBaseline(next);
    setEditingId(p === "new" ? null : p.id);
    setSlugTouched(p !== "new");
    setPendingSwitch(null);
    if (window.innerWidth < 1024) editorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const requestOpen = (p: ApiBlogPost | "new") => {
    if (dirty) setPendingSwitch(p);
    else open(p);
  };

  const set = <K extends keyof BlogPostInput>(k: K, v: BlogPostInput[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onTitle = (title: string) =>
    setForm((f) => ({
      ...f,
      title,
      slug: slugTouched ? f.slug : categoryOf(f.slug).prefix + slugify(title),
    }));

  const onCategory = (value: string) => {
    const next = CATEGORIES.find((c) => c.value === value)!;
    setForm((f) => {
      const base = (f.slug ?? "").slice(categoryOf(f.slug).prefix.length);
      return { ...f, slug: next.prefix + base };
    });
  };

  const upload = async (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) return toast.error("Please choose an image file.");
    if (file.size > 5 * 1024 * 1024) return toast.error("Image must be under 5 MB.");
    setUploading(true);
    try {
      set("coverImageUrl", await uploadImage(file));
      toast.success("Image uploaded");
    } catch (e) {
      fail(e);
    } finally {
      setUploading(false);
    }
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return toast.error("Please add a title.");
    if (!form.content?.trim()) return toast.error("Please add some content.");
    setSaving(true);
    try {
      const body: BlogPostInput = {
        ...form,
        title: form.title.trim(),
        slug: form.slug || categoryOf(form.slug).prefix + slugify(form.title),
        coverImageUrl: form.coverImageUrl || null,
        publishedAtUtc: form.isPublished ? form.publishedAtUtc ?? new Date().toISOString() : null,
      };
      const saved = editingId ? await updateBlog(editingId, body) : await createBlog(body);
      toast.success(
        editingId ? "Changes saved" : body.isPublished ? "Post published" : "Draft saved",
      );
      await load();
      const next = toInput({ ...body, id: saved?.id ?? editingId ?? 0 } as ApiBlogPost);
      setForm(next);
      setBaseline(next);
      setEditingId(saved?.id ?? editingId);
      setSlugTouched(true);
    } catch (err) {
      fail(err);
    } finally {
      setSaving(false);
    }
  };

  const confirmDelete = async () => {
    if (!toDelete) return;
    setDeleting(true);
    try {
      await deleteBlog(toDelete.id);
      toast.success("Post deleted");
      if (toDelete.id === editingId) open("new");
      setToDelete(null);
      await load();
    } catch (err) {
      fail(err);
    } finally {
      setDeleting(false);
    }
  };

  const shown = (posts ?? []).filter(
    (p) =>
      (filter === "all" || (filter === "published") === p.isPublished) &&
      p.title.toLowerCase().includes(search.trim().toLowerCase()),
  );
  const count = (f: Filter) =>
    (posts ?? []).filter((p) => f === "all" || (f === "published") === p.isPublished).length;
  const editing = posts?.find((p) => p.id === editingId);

  return (
    <div>
      <div>
        <div className="grid gap-6 lg:grid-cols-[340px_1fr] items-start">
          {/* Post list */}
          <aside className="rounded-2xl border bg-card p-4 space-y-3 lg:sticky lg:top-24">
            <Button className="w-full" onClick={() => requestOpen("new")}>
              <Plus className="mr-2 h-4 w-4" />New post
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search posts" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
            </div>
            <div className="flex gap-1 text-sm">
              {(["all", "published", "draft"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex-1 rounded-md px-2 py-1.5 capitalize transition-colors ${
                    filter === f ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {f === "draft" ? "Drafts" : f} {posts && <span className="opacity-70">({count(f)})</span>}
                </button>
              ))}
            </div>
            <ul className="max-h-[60vh] overflow-y-auto -mx-1 px-1 space-y-1">
              {posts === null && !loadError &&
                Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="h-14 w-full" />)}
              {loadError && (
                <li className="text-sm text-muted-foreground p-2">
                  Couldn't load posts.{" "}
                  <button className="underline" onClick={load}>Retry</button>
                </li>
              )}
              {posts && shown.length === 0 && (
                <li className="text-sm text-muted-foreground p-2">
                  {posts.length === 0 ? "No posts yet. Create your first one!" : "No posts match."}
                </li>
              )}
              {shown.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => requestOpen(p)}
                    className={`w-full text-left rounded-lg p-2 flex gap-3 items-center transition-colors ${
                      p.id === editingId ? "bg-primary/10 ring-1 ring-primary/40" : "hover:bg-muted"
                    }`}
                  >
                    {p.coverImageUrl ? (
                      <img src={p.coverImageUrl} alt="" className="h-10 w-10 rounded-md object-cover shrink-0" />
                    ) : (
                      <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center shrink-0">
                        <ImagePlus className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium line-clamp-1">{p.title}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <span>{fmtDate(p.publishedAtUtc ?? p.createdAtUtc) || "Not dated"}</span>
                        {!p.isPublished && <Badge variant="secondary" className="h-4 px-1.5 text-[10px]">Draft</Badge>}
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Editor */}
          <form ref={editorRef} onSubmit={save} className="rounded-2xl border bg-card">
            <div className="flex items-center justify-between gap-3 border-b p-4">
              <div className="flex items-center gap-2 min-w-0">
                <PenSquare className="h-5 w-5 shrink-0 text-primary" />
                <h2 className="font-semibold truncate">{editingId ? `Editing: ${editing?.title ?? form.title}` : "New post"}</h2>
                {dirty && <Badge variant="outline" className="shrink-0">Unsaved changes</Badge>}
              </div>
              {editingId && editing && (
                <Button type="button" variant="ghost" size="sm" className="text-destructive hover:text-destructive" onClick={() => setToDelete(editing)}>
                  <Trash2 className="mr-2 h-4 w-4" />Delete
                </Button>
              )}
            </div>

            <div className="p-4 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title <span className="text-destructive">*</span></Label>
                <Input id="title" placeholder="e.g. 5 tax tips for small businesses" value={form.title} onChange={(e) => onTitle(e.target.value)} />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={category.value} onValueChange={onCategory}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((c) => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Used for the filter buttons on the blog page.</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="author">Author</Label>
                  <Input id="author" placeholder="e.g. SBAG LLP" value={form.authorName ?? ""} onChange={(e) => set("authorName", e.target.value)} />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Blog image</Label>
                {form.coverImageUrl ? (
                  <div className="relative overflow-hidden rounded-xl border">
                    <img src={form.coverImageUrl} alt="Blog cover preview" className="h-48 w-full object-cover" />
                    <div className="absolute right-2 top-2 flex gap-2">
                      <Button type="button" size="sm" variant="secondary" onClick={() => fileRef.current?.click()} disabled={uploading}>Replace</Button>
                      <Button type="button" size="icon" variant="secondary" className="h-8 w-8" aria-label="Remove image" onClick={() => set("coverImageUrl", "")}>
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(e) => { e.preventDefault(); setDragging(false); upload(e.dataTransfer.files[0]); }}
                    disabled={uploading}
                    className={`flex h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed text-sm text-muted-foreground transition-colors ${
                      dragging ? "border-primary bg-primary/5" : "hover:bg-muted"
                    }`}
                  >
                    {uploading ? <Loader2 className="h-6 w-6 animate-spin" /> : <UploadCloud className="h-6 w-6" />}
                    <span>{uploading ? "Uploading..." : "Click to upload or drag an image here"}</span>
                    <span className="text-xs">PNG, JPG, WebP or GIF, up to 5 MB</span>
                  </button>
                )}
                <input ref={fileRef} type="file" accept="image/png,image/jpeg,image/webp,image/gif" className="hidden" onChange={(e) => { upload(e.target.files?.[0]); e.target.value = ""; }} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="summary">Short summary</Label>
                  <span className={`text-xs ${(form.summary?.length ?? 0) > 200 ? "text-destructive" : "text-muted-foreground"}`}>{form.summary?.length ?? 0}/200</span>
                </div>
                <Textarea id="summary" rows={2} placeholder="One or two sentences shown on the blog card." value={form.summary ?? ""} onChange={(e) => set("summary", e.target.value)} />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="content">Content <span className="text-destructive">*</span></Label>
                  <span className="text-xs text-muted-foreground">{words} words &middot; {Math.max(1, Math.round(words / 200))} min read</span>
                </div>
                <Textarea id="content" rows={14} placeholder="Write your article here." value={form.content ?? ""} onChange={(e) => set("content", e.target.value)} />
                <p className="text-xs text-muted-foreground">Tip: leave a blank line between paragraphs.</p>
              </div>

              <details className="rounded-lg border p-3 text-sm">
                <summary className="cursor-pointer font-medium">Advanced: page link (slug)</summary>
                <div className="mt-3 space-y-2">
                  <Input value={form.slug ?? ""} onChange={(e) => { setSlugTouched(true); set("slug", slugify(e.target.value)); }} />
                  <p className="text-xs text-muted-foreground">
                    Article address: /blog/{form.slug || "..."}. Generated from the title automatically. Changing it breaks old links to this post.
                  </p>
                </div>
              </details>
            </div>

            <div className="sticky bottom-0 flex flex-wrap items-center justify-between gap-3 rounded-b-2xl border-t bg-card/95 p-4 backdrop-blur">
              <label className="flex items-center gap-3 text-sm">
                <Switch checked={form.isPublished} onCheckedChange={(v) => set("isPublished", v)} />
                <span>
                  {form.isPublished ? "Published" : "Draft"}
                  <span className="block text-xs text-muted-foreground">
                    {form.isPublished ? "Visible on the website" : "Hidden from visitors"}
                  </span>
                </span>
              </label>
              <div className="flex gap-2">
                {editing?.isPublished && editing.slug && (
                  <Button type="button" variant="outline" asChild>
                    <Link to={`/blog/${editing.slug}`} target="_blank">View</Link>
                  </Button>
                )}
                {dirty && (
                  <Button type="button" variant="ghost" onClick={() => setForm(baseline)}>Discard</Button>
                )}
                <Button disabled={saving || uploading || (!dirty && !!editingId)}>
                  {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? "Save changes" : form.isPublished ? "Publish post" : "Save draft"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <AlertDialog open={!!toDelete} onOpenChange={(o) => !o && !deleting && setToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this post?</AlertDialogTitle>
            <AlertDialogDescription>
              "{toDelete?.title}" will be removed from the website permanently. This can't be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={(e) => { e.preventDefault(); confirmDelete(); }} disabled={deleting} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {deleting ? "Deleting..." : "Delete post"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!pendingSwitch} onOpenChange={(o) => !o && setPendingSwitch(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discard unsaved changes?</AlertDialogTitle>
            <AlertDialogDescription>You have changes that haven't been saved. They will be lost if you continue.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep editing</AlertDialogCancel>
            <AlertDialogAction onClick={() => pendingSwitch && open(pendingSwitch)}>Discard changes</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const AdminBlog = () => (
  <AdminShell>
    <Editor />
  </AdminShell>
);

export default AdminBlog;
