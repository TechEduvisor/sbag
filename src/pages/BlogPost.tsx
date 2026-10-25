import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { ApiBlogPost, listBlogs } from "@/lib/blogApi";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<ApiBlogPost | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "missing" | "error">("loading");

  useEffect(() => {
    setStatus("loading");
    listBlogs()
      .then((posts) => {
        const found = posts.find(
          (p) => p.isPublished && (p.slug === slug || String(p.id) === slug),
        );
        setPost(found ?? null);
        setStatus(found ? "ready" : "missing");
        if (found) document.title = `${found.title} | SBAG LLP`;
      })
      .catch(() => setStatus("error"));
    window.scrollTo(0, 0);
  }, [slug]);

  const words = (post?.content ?? "").split(/\s+/).length;
  const date = post?.publishedAtUtc ?? post?.createdAtUtc;

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 bg-background">
      <article className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-8"
        >
          <ArrowLeft size={16} /> Back to all articles
        </Link>

        {status === "loading" && (
          <p className="text-muted-foreground">Loading article...</p>
        )}
        {status === "error" && (
          <p className="text-muted-foreground">
            Couldn't load this article. Please try again in a moment.
          </p>
        )}
        {status === "missing" && (
          <p className="text-muted-foreground">Article not found.</p>
        )}

        {status === "ready" && post && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              {post.authorName && (
                <span className="inline-flex items-center gap-1">
                  <User size={14} /> {post.authorName}
                </span>
              )}
              {date && (
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <Clock size={14} /> {Math.max(1, Math.round(words / 200))} min read
              </span>
            </div>
            {post.coverImageUrl && (
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="w-full rounded-2xl mb-8"
              />
            )}
            <div className="text-lg leading-relaxed text-foreground whitespace-pre-line">
              {post.content}
            </div>
          </>
        )}
      </article>
    </div>
  );
};

export default BlogPost;
