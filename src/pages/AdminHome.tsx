import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle, Newspaper, Plus, Users } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";
import { listBlogs, listFaqs, listUsers } from "@/lib/blogApi";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [stats, setStats] = useState<Record<string, string>>({});

  useEffect(() => {
    const put = (k: string, v: string) => setStats((s) => ({ ...s, [k]: v }));
    listBlogs(true)
      .then((p) => put("blog", `${p.filter((x) => x.isPublished).length} published, ${p.filter((x) => !x.isPublished).length} drafts`))
      .catch(() => put("blog", ""));
    listFaqs(true)
      .then((f) => put("faq", `${f.filter((x) => x.isActive).length} visible, ${f.filter((x) => !x.isActive).length} hidden`))
      .catch(() => put("faq", ""));
    listUsers()
      .then((u) => put("users", `${u.filter((x) => x.isActive).length} active`))
      .catch(() => put("users", ""));
  }, []);

  const cards = [
    {
      key: "blog",
      title: "Blog posts",
      text: "Write, edit and publish articles, and manage their images.",
      icon: Newspaper,
      manage: "/admin/blog",
      add: { to: "/admin/blog", label: "New post" },
    },
    {
      key: "faq",
      title: "FAQs",
      text: "Update the questions and answers shown on the home page.",
      icon: HelpCircle,
      manage: "/admin/faqs",
      add: { to: "/admin/faqs?new=1", label: "Add FAQ" },
    },
    {
      key: "users",
      title: "Users",
      text: "Give teammates access to this admin area, or remove it.",
      icon: Users,
      manage: "/admin/users",
      add: { to: "/admin/users?new=1", label: "Add user" },
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-1">What would you like to do?</h2>
      <p className="text-sm text-muted-foreground mb-6">Pick an area to manage.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map(({ key, title, text, icon: Icon, manage, add }) => (
          <div key={key} className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground flex-1">{text}</p>
            <p className="mt-4 h-5 text-sm font-medium text-primary">{stats[key] ?? "Loading..."}</p>
            <div className="mt-4 flex gap-2">
              <Button asChild className="flex-1">
                <Link to={manage}>Manage<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link to={add.to}><Plus className="mr-1 h-4 w-4" />{add.label}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminHome = () => (
  <AdminShell>
    <Dashboard />
  </AdminShell>
);

export default AdminHome;
