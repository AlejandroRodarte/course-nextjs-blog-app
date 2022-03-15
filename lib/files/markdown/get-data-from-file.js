import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const getDataFromFile = async (...fileRelativePath) => {
  const fileName = fileRelativePath[fileRelativePath.length - 1];
  const filePath = path.join(process.cwd(), ...fileRelativePath);
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data: metadata, content } = matter(fileContent);
    const data = { fileName, metadata, content };
    return [data, undefined];
  } catch (e) {
    return [undefined, { error: "There was an error reading the file." }];
  }
};

export default getDataFromFile;
