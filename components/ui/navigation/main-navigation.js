import Link from "next/link";

import classes from "../../../styles/ui/navigation/main-navigation.module.css";
import MainLogo from "../logos/main-logo";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <MainLogo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
