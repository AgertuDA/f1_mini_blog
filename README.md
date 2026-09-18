# Dev Insights Mini Blog

A simple Mini Blog built with React, TypeScript, and Vite for the Dev Insights startup.

## Project Overview

The Dev Insights Mini Blog is a small React application that displays a list of blog posts. Each post contains a title, author, content preview, and publication date.

The application demonstrates reusable React components, TypeScript interfaces, multiple CSS styling approaches, conditional styling, React performance optimization, and a Higher-Order Component (HOC).

## Technologies Used

- React
- TypeScript
- Vite
- CSS


## Project Structure

```text
mini-blog/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Post.tsx
│   │   └── PostList.tsx
│   │
│   ├── hoc/
│   │   └── withLogger.tsx
│   │
│   ├── styles/
│   │   └── main.css
│   │
│   ├── types/
│   │   └── post.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
└── package.json
```

## Components

### App

`App` is the root component of the application. It renders the `Header` and `PostList` components.

### Header

`Header` displays the Dev Insights name and the New Post link.

### PostList

`PostList` contains the hardcoded blog post data and uses the `map()` method to render each post using the reusable `Post` component.

### Post

`Post` is a reusable functional component that receives a typed post object through props
and displays the post title, author, a truncated content preview (first 12 words), and date.

### withLogger

`withLogger` is a Higher-Order Component that adds logging behavior to a component. It logs when the wrapped component mounts and unmounts.

## Component Type

Functional components were used throughout the project.

Functional components were chosen because they provide a simple and readable way to build the application's UI. They also work naturally with React Hooks such as `useEffect`, which is used by the `withLogger` HOC.

## TypeScript

A TypeScript interface is used to define the structure of each blog post.

The `Post` interface contains:

- `id`
- `title`
- `author`
- `content`
- `date`

This provides type safety and helps ensure that each post contains the expected properties and data types.

## Styling

Two styling approaches were used in the project.

### External CSS

The main layout and visual appearance are defined in:

`src/styles/main.css`

This includes styling for the header, main content area, blog cards, typography, spacing, and background.

### Inline Styling

Inline styles are used in the `Post` component for the post date.

Conditional styling is applied based on the post's date: if a post was published within
the last 24 hours (relative to a fixed reference date, since dates are hardcoded sample
data), its date is displayed in bold and underlined, and a "New!" badge is shown in the
top-right corner of the post card.

## Optimization

`React.memo` is used with the `Post` component:

```tsx
export default memo(Post)
```

This helps avoid unnecessary re-renders when the component receives the same props.

Unique `key` values are also provided when rendering the posts:

```tsx
<Post key={post.id} post={post} />
```

The post ID is used as the unique key for each list item.

## Higher-Order Component

The project includes a `withLogger` Higher-Order Component.

It wraps the `PostList` component and logs its lifecycle events:

```text
PostList mounted
PostList unmounted
```

This demonstrates how a HOC can add reusable behavior to an existing component without changing the component's main functionality.

## Installation

Clone the repository:

```bash
git clone https://github.com/AgertuDA/f1_mini_blog.git
```

Navigate into the project:

```bash
cd f1_mini_blog/mini-blog
```

Install the dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at the local URL provided by Vite, usually:

```text
http://localhost:5173/
```

## Building the Application

To create a production build:

```bash
npm run build
```

## Testing

The project does not currently include a dedicated testing framework or test suite.

The application was tested manually by running the Vite development server and checking the rendered components and browser console logs.

## Challenges

One challenge was working with TypeScript generics while creating the `withLogger` Higher-Order Component. The generic props type initially caused a TypeScript error when the wrapped component was rendered.

The issue was resolved by constraining the generic type to an object:

```tsx
function withLogger<P extends object>(
```

Another challenge was understanding how `React.memo` and the `key` prop serve different purposes. The `key` prop helps React identify items in a list, while `React.memo` can prevent unnecessary component re-renders when props have not changed.

## External Libraries and Packages

The project uses the following main packages:

- React — for building the user interface
- React DOM — for rendering the React application
- TypeScript — for static type checking
- Vite — for development and production build tooling

## Author
Agertu Diriba