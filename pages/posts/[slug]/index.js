import PostContent from "../../../components/pages/posts/[slug]/post-content";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs",
  title: "Getting Started with Next.js",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  content: "# This is a first post",
};

const PostDetailsPage = () => {
  return <PostContent post={DUMMY_POST} />;
};

export default PostDetailsPage;
