import Image from "next/image";

const postDetails = (post, classes) => {
  const { slug } = post;
  return {
    // ![<image.alt>](<image.src>)
    img: (image) => {
      return (
        <div className={classes.image}>
          <Image
            src={`/images/posts/${slug}/${image.src}`}
            alt={image.alt}
            width={600}
            height={300}
          />
        </div>
      );
    },
    p: (paragraph) => {
      const [firstNodeChildren] = paragraph.node.children;
      if (firstNodeChildren.tagName === "img") {
        const [firstChildren] = paragraph.children;
        return <div className={classes.image}>{firstChildren}</div>;
      }
      return <p>{paragraph.children}</p>;
    },
  };
};

export default postDetails;
