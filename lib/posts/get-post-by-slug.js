import getDataFromFile from "../files/markdown/get-data-from-file";
import markdown from "../mappers/markdown";

const getPostBySlug = async (slug) => {
  const fileName = `${slug}.md`;
  const [data, error] = await getDataFromFile("content", "posts", fileName);
  if (error) return [undefined, error];
  const post = markdown.mapToPost(data);
  return [post, undefined];
};

export default getPostBySlug;
