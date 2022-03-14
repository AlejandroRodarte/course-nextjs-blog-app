import PostItem from "./post-item";

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
