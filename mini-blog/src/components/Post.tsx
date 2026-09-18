import { memo } from "react";
import type { Post as PostType } from "../types/post";

interface PostProps {
  post: PostType;
}

function getPreview(content: string, wordLimit = 12): string {
  const words = content.split(" ");
  if (words.length <= wordLimit) return content;
  return words.slice(0, wordLimit).join(" ") + "...";
}

function isWithin24Hours(dateString: string): boolean {
  const postDate = new Date(dateString);
  const now = new Date("September 18, 2026"); 
  const diffMs = now.getTime() - postDate.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  return diffHours >= 0 && diffHours <= 24;
}

function Post({ post }: PostProps) {
  const isRecent = isWithin24Hours(post.date);

  return (
    <article>
      {isRecent && <span className="new-badge">New!</span>}

      <h2>{post.title}</h2>
      <p>By {post.author}</p>
      <p>{getPreview(post.content)}</p>
      <p
        style={{
          fontWeight: isRecent ? "bold" : "normal",
          textDecoration: isRecent ? "underline" : "none",
        }}
      >
        {post.date}
      </p>
    </article>
  );
}

export default memo(Post);
