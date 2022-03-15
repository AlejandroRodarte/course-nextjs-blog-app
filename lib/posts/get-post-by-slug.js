import files from "../files";
import mappers from "../mappers";

const getPostBySlug = async (slug) => {
  const fileName = `${slug}.md`;
  const [data, error] = await files.markdown.getDataFromFile(
    "content",
    "posts",
    fileName
  );
  if (error) return [undefined, error];
  const post = mappers.markdown.mapToPost(data);
  return [post, undefined];
};

export default getPostBySlug;
