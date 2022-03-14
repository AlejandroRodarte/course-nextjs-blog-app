import { Fragment } from "react";

import MainNavigation from "../ui/navigation/main-navigation";

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default DefaultLayout;
