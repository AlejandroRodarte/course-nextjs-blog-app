import files from "../files";
import mappers from "../mappers";
import sorters from "../sorters";
import filters from "../filters";

const getPosts = async (options = {}) => {
  const [data, error] = await files.markdown.getDataFromAllFiles(
    "content",
    "posts"
  );
  if (error) return [undefined, error];
  let postsData = data.map(mappers.markdown.mapToPost);
  if (options.filters)
    options.filters.forEach((filter) => {
      const { type, payload } = filter;
      postsData = postsData.filter(filters.posts[type](payload));
    });
  if (options.sort) {
    const { type, payload } = options.sort;
    postsData = postsData.sort(sorters.posts[type](payload));
  }
  return [postsData, undefined];
};

export default getPosts;
