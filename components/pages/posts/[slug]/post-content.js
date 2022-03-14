import { useMemo } from "react";
import ReactMarkdown from "react-markdown";

import classes from "../../../../styles/pages/posts/[slug]/post-content.module.css";
import PostHeader from "./post-header";

const PostContent = (props) => {
  const { post } = props;

  const postHeader = useMemo(
    () => ({
      title: post.title,
      image: `/images/posts/${post.slug}/${post.image}`,
    }),
    [post.title, post.slug, post.image]
  );

  return (
    <article className={classes.content}>
      <PostHeader post={postHeader} />
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
