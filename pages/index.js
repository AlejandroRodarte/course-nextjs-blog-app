import { Fragment } from "react";

import Hero from "../components/pages/hero";
import FeaturedPosts from "../components/pages/featured-posts";
import lib from "../lib";

const FeaturedPostsPage = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const [posts, error] = await lib.posts.getPosts({
    filters: [{ type: "is-featured" }],
    sort: { type: "date", payload: { order: "asc" } },
  });
  if (error) return { notFound: true };
  return { props: { posts } };
};

export default FeaturedPostsPage;
