import { useMemo } from "react";
import ReactMarkdown from "react-markdown";

import classes from "../../../../styles/pages/posts/[slug]/post-content.module.css";
import PostHeader from "./post-header";

import componentsGenerator from "../../../../config/react-markdown/components-generator";

const PostContent = (props) => {
  const { post } = props;

  const postHeader = useMemo(
    () => ({
      title: post.title,
      image: `/images/posts/${post.slug}/${post.image}`,
    }),
    [post.title, post.slug, post.image]
  );

  const components = useMemo(
    () => componentsGenerator.postDetails({ slug: post.slug }, classes),
    [post.slug]
  );

  return (
    <article className={classes.content}>
      <PostHeader post={postHeader} />
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
