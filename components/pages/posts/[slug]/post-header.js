import Image from "next/image";
import classes from "../../../../styles/pages/posts/[slug]/post-header.module.css";

const PostHeader = (props) => {
  // post.image is expected to be the full path (/images/posts/:slug/:image-name)
  const {
    post: { title, image },
  } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
