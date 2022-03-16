import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "../../styles/posts/post-item.module.css";

const PostItem = (props) => {
  const {
    post: { title, image, excerpt, date, slug },
  } = props;

  const postPath = useMemo(() => `/posts/${slug}`, [slug]);
  const imagePath = useMemo(
    () => `/images/posts/${slug}/${image}`,
    [slug, image]
  );
  const formattedDate = useMemo(
    () =>
      new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    [date]
  );

  return (
    <li className={classes.post}>
      <Link href={postPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
