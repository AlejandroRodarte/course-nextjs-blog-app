import classes from "../../../styles/pages/posts/all-posts.module.css";
import PostGrid from "../../posts/post-grid";

const AllPosts = (props) => {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
