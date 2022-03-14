import classes from "../../styles/pages/featured-posts.module.css";
import PostGrid from "../posts/post-grid";

const FeaturedPosts = () => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={[]} />
    </section>
  );
};

export default FeaturedPosts;
