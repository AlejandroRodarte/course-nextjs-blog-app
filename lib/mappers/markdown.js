const markdown = {
  mapToPost: (markdownData) => ({
    slug: markdownData.fileName.replace(/\.md$/, ""),
    ...markdownData.metadata,
    content: markdownData.content,
  }),
};

export default markdown;
