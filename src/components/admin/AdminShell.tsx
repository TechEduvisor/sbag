import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { ExternalLink, Eye, EyeOff, HelpCircle, LayoutDashboard, Loader2, LogOut, Newspaper, Users } from "lucide-react";
import { clearToken, getToken, login } from "@/lib/blogApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AdminContext {
  logout: () => void;
  /** Call when the API says the session is no longer valid. */
  expired: () => void;
}

const Ctx = createContext<AdminContext>({ logout: () => {}, expired: () => {} });
export const useAdmin = () => useContext(Ctx);

const tabs = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/blog", label: "Blog posts", icon: Newspaper },
  { to: "/admin/faqs", label: "FAQs", icon: HelpCircle },
  { to: "/admin/users", label: "Users", icon: Users },
];

const LoginForm = ({ onDone }: { onDone: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="min-h-screen pt-28 px-4 flex justify-center bg-background">
      <form
        className="w-full max-w-sm h-fit space-y-5 rounded-2xl border bg-card p-6 shadow-sm"
        onSubmit={async (e) => {
          e.preventDefault();
          setBusy(true);
          setError("");
          try {
            await login(email.trim(), password);
            onDone();
          } catch (err) {
            const msg = (err as Error).message;
            setError(
              msg.includes("log in")
                ? "Incorrect email or password."
                : msg === "Failed to fetch"
                  ? "Can't reach the server. Check your connection and try again."
                  : msg,
            );
          } finally {
            setBusy(false);
          }
        }}
      >
        <div>
          <h1 className="text-2xl font-bold">Admin login</h1>
          <p className="text-sm text-muted-foreground mt-1">Log in to manage your website content.</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required autoFocus />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input id="password" type={show ? "text" : "password"} autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required className="pr-10" />
            <button type="button" aria-label={show ? "Hide password" : "Show password"} onClick={() => setShow((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <Button className="w-full" disabled={busy}>
          {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {busy ? "Logging in..." : "Log in"}
        </Button>
        <p className="text-xs text-muted-foreground">
          The first login after a quiet period can take up to a minute while the server wakes up.
        </p>
      </form>
    </div>
  );
};

const AdminShell = ({ children }: { children: ReactNode }) => {
  const [authed, setAuthed] = useState(!!getToken());

  const logout = useCallback(() => {
    clearToken();
    setAuthed(false);
  }, []);

  const expired = useCallback(() => {
    clearToken();
    setAuthed(false);
    toast.error("Your session expired. Please log in again.");
  }, []);

  return (
    <Ctx.Provider value={{ logout, expired }}>
      <Toaster position="top-right" richColors closeButton />
      {!authed ? (
        <LoginForm onDone={() => setAuthed(true)} />
      ) : (
        <div className="min-h-screen pt-24 pb-16 px-4 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div>
                <h1 className="text-2xl font-bold">Website admin</h1>
                <p className="text-sm text-muted-foreground">Manage the content shown on your website.</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/" target="_blank"><ExternalLink className="mr-2 h-4 w-4" />View website</Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />Log out
                </Button>
              </div>
            </div>

            <nav className="mb-6 flex gap-1 border-b overflow-x-auto">
              {tabs.map(({ to, label, icon: Icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 -mb-px whitespace-nowrap transition-colors ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </NavLink>
              ))}
            </nav>

            {children}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
};

export default AdminShell;
