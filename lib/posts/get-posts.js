import getDataFromAllFiles from "../files/markdown/get-data-from-all-files";
import markdown from "../mappers/markdown";
import sorters from "../sorters";
import filters from "../filters";

const getPosts = async (options = {}) => {
  const [data, error] = await getDataFromAllFiles("content", "posts");
  if (error) return [undefined, error];
  let postsData = data.map(markdown.mapToPost);
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
