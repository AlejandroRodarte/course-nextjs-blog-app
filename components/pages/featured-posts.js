import classes from "../../styles/pages/featured-posts.module.css";
import PostGrid from "../posts/post-grid";

const FeaturedPosts = (props) => {
  const { posts } = props;
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
