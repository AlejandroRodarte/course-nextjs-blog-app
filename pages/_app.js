import "../styles/globals.css";

import DefaultLayout from "../components/layouts/default";
import { AppContextProvider } from "../contexts/app-context";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AppContextProvider>
  );
}

export default MyApp;
