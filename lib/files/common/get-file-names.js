import fs from "fs/promises";
import path from "path";

const getFileNames = async (...relativeDirPath) => {
  const dirPath = path.join(process.cwd(), ...relativeDirPath);
  try {
    const fileNames = await fs.readdir(dirPath);
    return [fileNames, undefined];
  } catch (e) {
    return [
      undefined,
      { message: "There was an error reading the directory." },
    ];
  }
};

export default getFileNames;
