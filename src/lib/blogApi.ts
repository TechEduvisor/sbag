export const API_BASE =
  import.meta.env.VITE_API_BASE_URL ?? "https://site-backend-brec.onrender.com";
export const SITE_KEY = import.meta.env.VITE_SITE_KEY ?? "sbag";

const TOKEN_KEY = "sbag_admin_token";

export interface ApiBlogPost {
  id: number;
  title: string;
  slug: string | null;
  summary: string | null;
  content: string | null;
  coverImageUrl: string | null;
  authorName: string | null;
  isPublished: boolean;
  publishedAtUtc: string | null;
  createdAtUtc?: string;
}

export type BlogPostInput = Omit<ApiBlogPost, "id" | "createdAtUtc">;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

async function request<T>(path: string, init: RequestInit = {}, auth = false): Promise<T> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(`${API_BASE}${path}`, { ...init, headers });
  if (!res.ok) {
    if (res.status === 401) clearToken();
    let detail = "";
    try {
      const j = await res.clone().json();
      detail = typeof j === "string" ? j : j?.error ?? j?.message ?? j?.title ?? "";
    } catch {
      /* no JSON body */
    }
    throw new Error(
      res.status === 401
        ? "Please log in again."
        : res.status === 403
          ? "Your account doesn't have permission to do this."
          : detail || `Request failed (${res.status})`,
    );
  }
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as T;
}

export async function login(email: string, password: string) {
  const data = await request<Record<string, unknown>>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  const token = (data?.token ?? data?.accessToken ?? data?.jwt) as string | undefined;
  if (!token) throw new Error("Login succeeded but no token was returned.");
  localStorage.setItem(TOKEN_KEY, token);
}

const blogsPath = `/api/sites/${SITE_KEY}/blogs`;

// Admins must send their token, otherwise the API hides drafts.
export const listBlogs = (auth = false) => request<ApiBlogPost[]>(blogsPath, {}, auth);
export const createBlog = (b: BlogPostInput) =>
  request<ApiBlogPost>(blogsPath, { method: "POST", body: JSON.stringify(b) }, true);
export const updateBlog = (id: number, b: BlogPostInput) =>
  request<ApiBlogPost>(`${blogsPath}/${id}`, { method: "PUT", body: JSON.stringify(b) }, true);
export const deleteBlog = (id: number) =>
  request<void>(`${blogsPath}/${id}`, { method: "DELETE" }, true);

export async function uploadImage(file: File): Promise<string> {
  const body = new FormData();
  body.append("file", file);
  const res = await fetch(`${API_BASE}/api/media/upload?siteKey=${SITE_KEY}&module=blogs`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getToken()}` },
    body,
  });
  if (!res.ok) {
    if (res.status === 401) clearToken();
    throw new Error(
      res.status === 401 ? "Please log in again." : `Image upload failed (${res.status})`,
    );
  }
  return (await res.json()).url as string;
}

export interface ApiFaq {
  id: number;
  question: string;
  answer: string;
  category: string | null;
  sortOrder: number;
  isActive: boolean;
}

export type FaqInput = Omit<ApiFaq, "id">;

const faqsPath = `/api/sites/${SITE_KEY}/faqs`;

export const listFaqs = (auth = false) => request<ApiFaq[]>(faqsPath, {}, auth);
export const createFaq = (f: FaqInput) =>
  request<ApiFaq>(faqsPath, { method: "POST", body: JSON.stringify(f) }, true);
export const updateFaq = (id: number, f: FaqInput) =>
  request<ApiFaq>(`${faqsPath}/${id}`, { method: "PUT", body: JSON.stringify(f) }, true);
export const deleteFaq = (id: number) =>
  request<void>(`${faqsPath}/${id}`, { method: "DELETE" }, true);

export interface ApiUser {
  id: number;
  fullName: string;
  email: string;
  role: string;
  isActive: boolean;
  lastLoginAtUtc?: string | null;
}

export interface NewUserInput {
  fullName: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
}

export const listUsers = () => request<ApiUser[]>("/api/auth/users", {}, true);
export const createUser = (u: NewUserInput) =>
  request<ApiUser>("/api/auth/users", { method: "POST", body: JSON.stringify(u) }, true);
export const updateUser = (
  id: number,
  u: { fullName: string; role: string; isActive: boolean; password?: string },
) => request<ApiUser>(`/api/auth/users/${id}`, { method: "PUT", body: JSON.stringify(u) }, true);
export const deleteUser = (id: number) =>
  request<void>(`/api/auth/users/${id}`, { method: "DELETE" }, true);
