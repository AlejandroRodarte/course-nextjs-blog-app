import AllPosts from "../../components/pages/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with in-built SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs-2",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with in-built SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs-3",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with in-built SSR.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs-4",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is the React framework for production - it makes building fullstack React apps and sites a breeze and ships with in-built SSR.",
    date: "2022-02-10",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
