import { Fragment } from "react";
import Head from "next/head";

import AllPosts from "../../components/pages/posts/all-posts";

import lib from "../../lib";

const AllPostsPage = (props) => {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Alejandro&apos;s Posts</title>
        <meta name="description" content="All of my fucking awful content." />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const [posts, error] = await lib.posts.getPosts({
    sort: { type: "date", payload: { order: "asc" } },
  });
  if (error) return { notFound: true };
  return { props: { posts } };
};

export default AllPostsPage;
