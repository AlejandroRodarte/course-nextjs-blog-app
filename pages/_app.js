import React from "react";
import Head from "next/head";

import "../styles/globals.css";

import DefaultLayout from "../components/layouts/default";
import { AppContextProvider } from "../contexts/app-context";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AppContextProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </AppContextProvider>
    </React.Fragment>
  );
}

export default MyApp;
