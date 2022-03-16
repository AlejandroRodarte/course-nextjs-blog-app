import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/pages/hero";
import FeaturedPosts from "../components/pages/featured-posts";
import lib from "../lib";

const FeaturedPostsPage = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>Alejandro's Next.js Blog</title>
        <meta
          name="description"
          content="I am a fucking failure of a person."
        />
      </Head>
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
