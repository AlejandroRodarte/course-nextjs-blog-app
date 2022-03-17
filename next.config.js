const fs = require("fs/promises");
const path = require("path");

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

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
  exportPathMap: async () => {
    const routes = {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
      "/posts": { page: "/posts" },
    };
    const [fileNames, error] = await getFileNames("content", "posts");
    if (error) return routes;
    fileNames.forEach((fileName) => {
      const [slug] = fileName.split("-");
      routes[`/posts/${slug}`] = { page: "/posts/[slug]" };
    });
    return routes;
  },
};

module.exports = nextConfig;
