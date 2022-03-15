const posts = {
  date: (payload) => {
    if (payload.order === "asc")
      return (postA, postB) => (postA.date > postB.date ? -1 : 1);
    else return (postA, postB) => (postA.date < postB.date ? -1 : 1);
  },
};

export default posts;
