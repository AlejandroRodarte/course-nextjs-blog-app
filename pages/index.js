import { Fragment } from "react";

import Hero from "../components/pages/hero";
import FeaturedPosts from "../components/pages/featured-posts";

const FeaturedPostsPage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
};

export default FeaturedPostsPage;
