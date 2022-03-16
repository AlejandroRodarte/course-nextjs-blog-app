import { Fragment } from "react";
import Head from "next/head";

import PostContent from "../../../components/pages/posts/[slug]/post-content";

import getFileNames from "../../../lib/files/common/get-file-names";
import getPostBySlug from "../../../lib/posts/get-post-by-slug";

const PostDetailsPage = (props) => {
  const { post } = props;
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const [fileNames, error] = await getFileNames("content", "posts");
  if (error) return { paths: [], fallback: false };
  return {
    paths: fileNames.map((fileName) => {
      const [slug] = fileName.split(".");
      return { params: { slug } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const [post, error] = await getPostBySlug(slug);
  if (error) return { notFound: true };
  return { props: { post }, revalidate: 600 };
};

export default PostDetailsPage;
