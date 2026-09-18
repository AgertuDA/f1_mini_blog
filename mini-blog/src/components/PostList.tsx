import Post from "./Post";
import type { Post as PostType } from "../types/post";
import withLogger from "../hoc/withLogger";

const posts: PostType[] = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Joe",
    content:
      "React makes it easier to build interactive user interfaces using reusable components.",
    date: "September 15, 2026",
  },
  {
    id: 2,
    title: "Why TypeScript Matters",
    author: "Abraham",
    content:
      "TypeScript adds type safety to JavaScript and can help developers catch errors earlier.",
    date: "September 16, 2026",
  },
  {
    id: 3,
    title: "Understanding React Components",
    author: "Sarah",
    content:
      "Components are reusable building blocks that help organize a React application. Each component can have its own responsibilities, making the application easier to understand, maintain, and update as new features are added.",
    date: "September 18, 2026",
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

export default withLogger(PostList, "PostList");
