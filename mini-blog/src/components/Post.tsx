import type { Post as PostType } from "../types/post";

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const isRecent = post.id === 3;

  return (
    <article>
      <h2>{post.title}</h2>

      <p>By {post.author}</p>

      <p>{post.content}</p>

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

export default Post;
