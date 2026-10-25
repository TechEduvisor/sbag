import { useCallback, useEffect, useState } from "react";
import {
  ApiBlogPost,
  BlogPostInput,
  clearToken,
  createBlog,
  deleteBlog,
  getToken,
  listBlogs,
  login,
  updateBlog,
  uploadImage,
} from "@/lib/blogApi";

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

const slugify = (t: string) =>
  t.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const inputCls = "w-full border rounded-md px-3 py-2 bg-background";

const AdminBlog = () => {
  const [authed, setAuthed] = useState(!!getToken());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<ApiBlogPost[]>([]);
  const [form, setForm] = useState<BlogPostInput>(empty);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const load = useCallback(() => {
    listBlogs().then(setPosts).catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    if (authed) load();
  }, [authed, load]);

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    setError("");
    try {
      await fn();
    } catch (e) {
      setError((e as Error).message);
      if (!getToken()) setAuthed(false);
    } finally {
      setBusy(false);
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen pt-28 px-4 flex justify-center">
        <form
          className="w-full max-w-sm space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            run(async () => {
              await login(email, password);
              setAuthed(true);
            });
          }}
        >
          <h1 className="text-2xl font-bold">Blog admin login</h1>
          <input className={inputCls} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className={inputCls} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <button disabled={busy} className="w-full rounded-md bg-primary text-primary-foreground py-2">
            {busy ? "Logging in..." : "Log in"}
          </button>
        </form>
      </div>
    );
  }

  const set = <K extends keyof BlogPostInput>(k: K, v: BlogPostInput[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    run(async () => {
      const body = {
        ...form,
        slug: form.slug || slugify(form.title),
        coverImageUrl: form.coverImageUrl || null,
        publishedAtUtc: form.isPublished ? form.publishedAtUtc ?? new Date().toISOString() : null,
      };
      if (editingId) await updateBlog(editingId, body);
      else await createBlog(body);
      setForm(empty);
      setEditingId(null);
      load();
    });
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 max-w-4xl mx-auto space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog admin</h1>
        <button className="text-sm underline" onClick={() => { clearToken(); setAuthed(false); }}>
          Log out
        </button>
      </div>

      <form onSubmit={submit} className="space-y-3">
        <h2 className="font-semibold">{editingId ? "Edit post" : "New post"}</h2>
        <input className={inputCls} placeholder="Title" value={form.title} onChange={(e) => set("title", e.target.value)} required />
        <input className={inputCls} placeholder="Slug (auto from title if empty)" value={form.slug ?? ""} onChange={(e) => set("slug", e.target.value)} />
        <input className={inputCls} placeholder="Author name" value={form.authorName ?? ""} onChange={(e) => set("authorName", e.target.value)} />
        <div className="space-y-2">
          <label className="text-sm font-medium">Blog image</label>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            disabled={busy}
            className="block w-full text-sm"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (!file) return;
              if (file.size > 5 * 1024 * 1024) {
                setError("Image must be under 5 MB.");
                return;
              }
              run(async () => set("coverImageUrl", await uploadImage(file)));
              e.target.value = "";
            }}
          />
          <input className={inputCls} placeholder="...or paste an image URL" value={form.coverImageUrl ?? ""} onChange={(e) => set("coverImageUrl", e.target.value)} />
          {form.coverImageUrl && (
            <div className="flex items-start gap-3">
              <img src={form.coverImageUrl} alt="Preview" className="h-32 rounded-md border object-cover" />
              <button type="button" className="text-sm underline text-red-600" onClick={() => set("coverImageUrl", "")}>
                Remove image
              </button>
            </div>
          )}
        </div>
        <textarea className={inputCls} rows={2} placeholder="Summary" value={form.summary ?? ""} onChange={(e) => set("summary", e.target.value)} />
        <textarea className={inputCls} rows={10} placeholder="Content" value={form.content ?? ""} onChange={(e) => set("content", e.target.value)} required />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.isPublished} onChange={(e) => set("isPublished", e.target.checked)} />
          Published
        </label>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-3">
          <button disabled={busy} className="rounded-md bg-primary text-primary-foreground px-4 py-2">
            {editingId ? "Update" : "Publish"}
          </button>
          {editingId && (
            <button type="button" className="underline text-sm" onClick={() => { setEditingId(null); setForm(empty); }}>
              Cancel edit
            </button>
          )}
        </div>
      </form>

      <ul className="divide-y border rounded-md">
        {posts.length === 0 && <li className="p-4 text-sm text-muted-foreground">No posts yet.</li>}
        {posts.map((p) => (
          <li key={p.id} className="p-4 flex justify-between gap-4">
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-muted-foreground">{p.isPublished ? "Published" : "Draft"}</div>
            </div>
            <div className="flex gap-3 text-sm shrink-0">
              <button
                className="underline"
                onClick={() => {
                  setEditingId(p.id);
                  setForm({
                    title: p.title, slug: p.slug, summary: p.summary, content: p.content,
                    coverImageUrl: p.coverImageUrl, authorName: p.authorName,
                    isPublished: p.isPublished, publishedAtUtc: p.publishedAtUtc,
                  });
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Edit
              </button>
              <button
                className="underline text-red-600"
                onClick={() => confirm("Delete this post?") && run(async () => { await deleteBlog(p.id); load(); })}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminBlog;
