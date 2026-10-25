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
    throw new Error(
      res.status === 401 ? "Please log in again." : `Request failed (${res.status})`,
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

export const listBlogs = () => request<ApiBlogPost[]>(blogsPath);
export const createBlog = (b: BlogPostInput) =>
  request<ApiBlogPost>(blogsPath, { method: "POST", body: JSON.stringify(b) }, true);
export const updateBlog = (id: number, b: BlogPostInput) =>
  request<ApiBlogPost>(`${blogsPath}/${id}`, { method: "PUT", body: JSON.stringify(b) }, true);
export const deleteBlog = (id: number) =>
  request<void>(`${blogsPath}/${id}`, { method: "DELETE" }, true);
