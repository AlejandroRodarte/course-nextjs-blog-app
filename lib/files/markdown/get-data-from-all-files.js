import fs from "fs/promises";
import path from "path";

import getDataFromFile from "./get-data-from-file";

const getDataFromAllFiles = async (...dirRelativePath) => {
  const data = [];
  const dirPath = path.join(process.cwd(), ...dirRelativePath);
  try {
    const fileNames = await fs.readdir(dirPath);
    for (const fileName of fileNames) {
      const [markdown, error] = await getDataFromFile(
        ...dirRelativePath,
        fileName
      );
      if (error) return [undefined, error];
      data.push(markdown);
    }
    return [data, undefined];
  } catch (e) {
    return [
      undefined,
      { message: "There was an error reading the markdown files." },
    ];
  }
};

export default getDataFromAllFiles;
