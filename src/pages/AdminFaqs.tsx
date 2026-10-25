import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowDown, ArrowUp, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import AdminShell, { useAdmin } from "@/components/admin/AdminShell";
import { ApiFaq, FaqInput, createFaq, deleteFaq, getToken, listFaqs, updateFaq } from "@/lib/blogApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

const blank: FaqInput = { question: "", answer: "", category: "", sortOrder: 0, isActive: true };

const bySort = (a: ApiFaq, b: ApiFaq) => a.sortOrder - b.sortOrder || a.id - b.id;

const FaqEditor = () => {
  const { expired } = useAdmin();
  const [faqs, setFaqs] = useState<ApiFaq[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [editing, setEditing] = useState<ApiFaq | "new" | null>(null);
  const [form, setForm] = useState<FaqInput>(blank);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState<ApiFaq | null>(null);
  const [busyId, setBusyId] = useState<number | null>(null);

  const fail = useCallback(
    (e: unknown) => {
      if (!getToken()) return expired();
      const msg = (e as Error).message;
      toast.error(msg === "Failed to fetch" ? "Can't reach the server. Please try again." : msg);
    },
    [expired],
  );

  const load = useCallback(async () => {
    try {
      setLoadError(false);
      setFaqs([...(await listFaqs(true))].sort(bySort));
    } catch {
      setLoadError(true);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const openForm = (f: ApiFaq | "new") => {
    setEditing(f);
    setForm(
      f === "new"
        ? { ...blank, sortOrder: (faqs ?? []).reduce((m, x) => Math.max(m, x.sortOrder), 0) + 10 }
        : { question: f.question, answer: f.answer, category: f.category ?? "", sortOrder: f.sortOrder, isActive: f.isActive },
    );
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.question.trim() || !form.answer.trim()) {
      return toast.error("Please fill in both the question and the answer.");
    }
    setSaving(true);
    try {
      const body = { ...form, question: form.question.trim(), answer: form.answer.trim(), category: form.category?.trim() || null };
      if (editing === "new") await createFaq(body);
      else if (editing) await updateFaq(editing.id, body);
      toast.success(editing === "new" ? "FAQ added" : "FAQ updated");
      setEditing(null);
      await load();
    } catch (err) {
      fail(err);
    } finally {
      setSaving(false);
    }
  };

  const toggle = async (f: ApiFaq) => {
    setBusyId(f.id);
    try {
      await updateFaq(f.id, { question: f.question, answer: f.answer, category: f.category, sortOrder: f.sortOrder, isActive: !f.isActive });
      toast.success(f.isActive ? "FAQ hidden from the website" : "FAQ is now visible");
      await load();
    } catch (err) {
      fail(err);
    } finally {
      setBusyId(null);
    }
  };

  const move = async (index: number, dir: -1 | 1) => {
    if (!faqs) return;
    const next = [...faqs];
    [next[index], next[index + dir]] = [next[index + dir], next[index]];
    setBusyId(next[index].id);
    try {
      await Promise.all(
        next.map((f, i) =>
          f.sortOrder === i * 10
            ? null
            : updateFaq(f.id, { question: f.question, answer: f.answer, category: f.category, sortOrder: i * 10, isActive: f.isActive }),
        ),
      );
      await load();
    } catch (err) {
      fail(err);
    } finally {
      setBusyId(null);
    }
  };

  const remove = async () => {
    if (!toDelete) return;
    setBusyId(toDelete.id);
    try {
      await deleteFaq(toDelete.id);
      toast.success("FAQ deleted");
      setToDelete(null);
      await load();
    } catch (err) {
      fail(err);
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="rounded-2xl border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4">
        <div>
          <h2 className="font-semibold">Frequently asked questions</h2>
          <p className="text-sm text-muted-foreground">Shown on the home page in this order. Use the arrows to reorder.</p>
        </div>
        <Button onClick={() => openForm("new")}><Plus className="mr-2 h-4 w-4" />Add FAQ</Button>
      </div>

      <ul className="divide-y">
        {faqs === null && !loadError && Array.from({ length: 4 }).map((_, i) => <li key={i} className="p-4"><Skeleton className="h-12 w-full" /></li>)}
        {loadError && (
          <li className="p-6 text-sm text-muted-foreground">
            Couldn't load FAQs. <button className="underline" onClick={load}>Retry</button>
          </li>
        )}
        {faqs && faqs.length === 0 && (
          <li className="p-8 text-center text-sm text-muted-foreground">
            No FAQs yet. Click "Add FAQ" to create the first one. The FAQ section stays hidden on the website until there is at least one visible FAQ.
          </li>
        )}
        {faqs?.map((f, i) => (
          <li key={f.id} className={`flex items-start gap-3 p-4 ${f.isActive ? "" : "opacity-60"}`}>
            <div className="flex flex-col">
              <Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Move up" disabled={i === 0 || busyId !== null} onClick={() => move(i, -1)}><ArrowUp className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" className="h-7 w-7" aria-label="Move down" disabled={i === faqs.length - 1 || busyId !== null} onClick={() => move(i, 1)}><ArrowDown className="h-4 w-4" /></Button>
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-medium">{f.question}</div>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{f.answer}</p>
              <div className="mt-2 flex items-center gap-2">
                {f.category && <Badge variant="secondary">{f.category}</Badge>}
                {!f.isActive && <Badge variant="outline">Hidden</Badge>}
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <Switch checked={f.isActive} disabled={busyId === f.id} onCheckedChange={() => toggle(f)} aria-label={f.isActive ? "Hide FAQ" : "Show FAQ"} />
              <Button variant="ghost" size="icon" aria-label="Edit" onClick={() => openForm(f)}><Pencil className="h-4 w-4" /></Button>
              <Button variant="ghost" size="icon" aria-label="Delete" className="text-destructive hover:text-destructive" onClick={() => setToDelete(f)}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </li>
        ))}
      </ul>

      <Dialog open={!!editing} onOpenChange={(o) => !o && !saving && setEditing(null)}>
        <DialogContent className="max-w-xl">
          <form onSubmit={save} className="space-y-4">
            <DialogHeader>
              <DialogTitle>{editing === "new" ? "Add FAQ" : "Edit FAQ"}</DialogTitle>
              <DialogDescription>This appears in the FAQ section of the home page.</DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <Label htmlFor="q">Question <span className="text-destructive">*</span></Label>
              <Input id="q" value={form.question} onChange={(e) => setForm({ ...form, question: e.target.value })} placeholder="e.g. Do you follow US GAAP?" autoFocus />
            </div>
            <div className="space-y-2">
              <Label htmlFor="a">Answer <span className="text-destructive">*</span></Label>
              <Textarea id="a" rows={6} value={form.answer} onChange={(e) => setForm({ ...form, answer: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="c">Category (optional)</Label>
              <Input id="c" value={form.category ?? ""} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Services, Pricing, Security" />
              <p className="text-xs text-muted-foreground">If you use categories, visitors get filter buttons above the questions.</p>
            </div>
            <label className="flex items-center gap-3 text-sm">
              <Switch checked={form.isActive} onCheckedChange={(v) => setForm({ ...form, isActive: v })} />
              {form.isActive ? "Visible on the website" : "Hidden from visitors"}
            </label>
            <DialogFooter>
              <Button type="button" variant="ghost" disabled={saving} onClick={() => setEditing(null)}>Cancel</Button>
              <Button disabled={saving}>{saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{editing === "new" ? "Add FAQ" : "Save changes"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!toDelete} onOpenChange={(o) => !o && busyId === null && setToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this FAQ?</AlertDialogTitle>
            <AlertDialogDescription>"{toDelete?.question}" will be removed permanently. To keep it but hide it, turn its switch off instead.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={busyId !== null}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={(e) => { e.preventDefault(); remove(); }} disabled={busyId !== null} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {busyId !== null ? "Deleting..." : "Delete FAQ"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const AdminFaqs = () => (
  <AdminShell>
    <FaqEditor />
  </AdminShell>
);

export default AdminFaqs;
