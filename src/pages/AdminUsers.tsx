import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeOff, Loader2, Pencil, Plus, Trash2 } from "lucide-react";
import AdminShell, { useAdmin } from "@/components/admin/AdminShell";
import { ApiUser, createUser, deleteUser, getToken, listUsers, updateUser } from "@/lib/blogApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

interface UserForm {
  fullName: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

const blank: UserForm = { fullName: "", email: "", password: "", role: "Admin", isActive: true };

const ROLE_HELP: Record<string, string> = {
  Admin: "Can log in and add, edit and delete blogs, FAQs and users.",
  User: "Can log in but can't change any website content.",
};

// Best effort: find the logged-in user's email inside the JWT so we can protect them from locking themselves out.
const currentEmail = () => {
  try {
    const payload = atob((getToken() ?? "").split(".")[1].replace(/-/g, "+").replace(/_/g, "/"));
    return payload.toLowerCase();
  } catch {
    return "";
  }
};

const fmt = (d?: string | null) =>
  d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Never";

const UserManager = () => {
  const { expired } = useAdmin();
  const [users, setUsers] = useState<ApiUser[] | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [editing, setEditing] = useState<ApiUser | "new" | null>(null);
  const [form, setForm] = useState<UserForm>(blank);
  const [showPw, setShowPw] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toDelete, setToDelete] = useState<ApiUser | null>(null);
  const me = currentEmail();
  const isMe = (u: ApiUser) => !!me && me.includes(u.email.toLowerCase());

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
      setUsers(await listUsers());
    } catch (e) {
      if (!getToken()) return expired();
      setLoadError(true);
    }
  }, [expired]);

  useEffect(() => {
    load();
  }, [load]);

  const openForm = (u: ApiUser | "new") => {
    setEditing(u);
    setShowPw(false);
    setForm(u === "new" ? blank : { fullName: u.fullName, email: u.email, password: "", role: u.role, isActive: u.isActive });
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    const isNew = editing === "new";
    if (!form.fullName.trim()) return toast.error("Please enter the user's name.");
    if (isNew && !/^\S+@\S+\.\S+$/.test(form.email.trim())) return toast.error("Please enter a valid email address.");
    if ((isNew || form.password) && form.password.length < 8) return toast.error("Password must be at least 8 characters.");
    setSaving(true);
    try {
      if (isNew) {
        await createUser({ ...form, fullName: form.fullName.trim(), email: form.email.trim() });
        toast.success("User added. Share the password with them securely.");
      } else if (editing) {
        await updateUser(editing.id, {
          fullName: form.fullName.trim(),
          role: form.role,
          isActive: form.isActive,
          ...(form.password ? { password: form.password } : {}),
        });
        toast.success("User updated");
      }
      setEditing(null);
      await load();
    } catch (err) {
      fail(err);
    } finally {
      setSaving(false);
    }
  };

  const remove = async () => {
    if (!toDelete) return;
    setSaving(true);
    try {
      await deleteUser(toDelete.id);
      toast.success("User deactivated");
      setToDelete(null);
      await load();
    } catch (err) {
      fail(err);
    } finally {
      setSaving(false);
    }
  };

  const self = editing && editing !== "new" && isMe(editing);

  return (
    <div className="rounded-2xl border bg-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4">
        <div>
          <h2 className="font-semibold">Users</h2>
          <p className="text-sm text-muted-foreground">People who can log in to this admin area.</p>
        </div>
        <Button onClick={() => openForm("new")}><Plus className="mr-2 h-4 w-4" />Add user</Button>
      </div>

      <ul className="divide-y">
        {users === null && !loadError && Array.from({ length: 3 }).map((_, i) => <li key={i} className="p-4"><Skeleton className="h-10 w-full" /></li>)}
        {loadError && (
          <li className="p-6 text-sm text-muted-foreground">
            Couldn't load users. Only Admins can view this list. <button className="underline" onClick={load}>Retry</button>
          </li>
        )}
        {users?.map((u) => (
          <li key={u.id} className={`flex flex-wrap items-center gap-3 p-4 ${u.isActive ? "" : "opacity-60"}`}>
            <div className="min-w-0 flex-1">
              <div className="font-medium flex items-center gap-2">
                {u.fullName}
                {isMe(u) && <Badge variant="outline">You</Badge>}
              </div>
              <div className="text-sm text-muted-foreground truncate">{u.email}</div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={u.role === "Admin" ? "default" : "secondary"}>{u.role}</Badge>
              {!u.isActive && <Badge variant="outline">Inactive</Badge>}
            </div>
            <div className="hidden sm:block text-xs text-muted-foreground w-28">Last login: {fmt(u.lastLoginAtUtc)}</div>
            <div className="flex gap-1">
              <Button variant="ghost" size="icon" aria-label="Edit user" onClick={() => openForm(u)}><Pencil className="h-4 w-4" /></Button>
              {u.isActive && <Button variant="ghost" size="icon" aria-label="Deactivate user" disabled={isMe(u)} title={isMe(u) ? "You can't deactivate your own account" : "Deactivate user"} className="text-destructive hover:text-destructive" onClick={() => setToDelete(u)}><Trash2 className="h-4 w-4" /></Button>}
            </div>
          </li>
        ))}
      </ul>

      <Dialog open={!!editing} onOpenChange={(o) => !o && !saving && setEditing(null)}>
        <DialogContent className="max-w-md">
          <form onSubmit={save} className="space-y-4" autoComplete="off">
            <DialogHeader>
              <DialogTitle>{editing === "new" ? "Add user" : "Edit user"}</DialogTitle>
              <DialogDescription>
                {editing === "new" ? "They can log in at /admin/blog with this email and password." : "Leave the password empty to keep it unchanged."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              <Label htmlFor="fn">Full name</Label>
              <Input id="fn" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} autoFocus />
            </div>
            <div className="space-y-2">
              <Label htmlFor="em">Email</Label>
              <Input id="em" type="email" value={form.email} disabled={editing !== "new"} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              {editing !== "new" && <p className="text-xs text-muted-foreground">Email can't be changed.</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="pw">{editing === "new" ? "Password" : "New password (optional)"}</Label>
              <div className="relative">
                <Input id="pw" type={showPw ? "text" : "password"} autoComplete="new-password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="pr-10" />
                <button type="button" aria-label={showPw ? "Hide password" : "Show password"} onClick={() => setShowPw((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                  {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground">At least 8 characters.</p>
            </div>
            <div className="space-y-2">
              <Label>Role</Label>
              <Select value={form.role} onValueChange={(v) => setForm({ ...form, role: v })} disabled={!!self}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="User">User</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">{ROLE_HELP[form.role]}</p>
            </div>
            <label className="flex items-center gap-3 text-sm">
              <Switch checked={form.isActive} disabled={!!self} onCheckedChange={(v) => setForm({ ...form, isActive: v })} />
              {form.isActive ? "Active: can log in" : "Inactive: can't log in"}
            </label>
            <DialogFooter>
              <Button type="button" variant="ghost" disabled={saving} onClick={() => setEditing(null)}>Cancel</Button>
              <Button disabled={saving}>{saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}{editing === "new" ? "Add user" : "Save changes"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!toDelete} onOpenChange={(o) => !o && !saving && setToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Deactivate this user?</AlertDialogTitle>
            <AlertDialogDescription>{toDelete?.fullName} ({toDelete?.email}) will no longer be able to log in. The account stays in this list as Inactive, and you can switch it back on with Edit.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={saving}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={(e) => { e.preventDefault(); remove(); }} disabled={saving} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              {saving ? "Deactivating..." : "Deactivate user"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

const AdminUsers = () => (
  <AdminShell>
    <UserManager />
  </AdminShell>
);

export default AdminUsers;
