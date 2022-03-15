import AllPosts from "../../components/pages/posts/all-posts";

import lib from "../../lib";

const AllPostsPage = (props) => {
  const { posts } = props;
  return <AllPosts posts={posts} />;
};

export const getStaticProps = async () => {
  const [posts, error] = await lib.posts.getPosts({
    sort: { type: "date", payload: { order: "asc" } },
  });
  if (error) return { notFound: true };
  return { props: { posts } };
};

export default AllPostsPage;
