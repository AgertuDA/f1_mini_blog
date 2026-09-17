import Post from "./Post";
import type { Post as PostType } from "../types/post";

const posts: PostType[] = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Joe",
    content:
      "React makes it easier to build interactive user interfaces using reusable components.",
    date: "September 10, 2026",
  },
  {
    id: 2,
    title: "Why TypeScript Matters",
    author: "Abraham",
    content:
      "TypeScript adds type safety to JavaScript and can help developers catch errors earlier.",
    date: "September 12, 2026",
  },
  {
    id: 3,
    title: "Understanding React Components",
    author: "Sarah",
    content:
      "Components are reusable building blocks that help organize a React application.",
    date: "September 15, 2026",
  },
];

function PostList() {
  return (
    <main>
      <h2>Latest Posts</h2>

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}

export default PostList;
