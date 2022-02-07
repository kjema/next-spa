import {useEffect, useState} from "react";

import type {AppProps} from "next/app";
import "~/styles/globals.css";
import Head from "next/head";

export default function Wrapper(props: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted ? <App {...props} /> : <div>Loading...</div>;
}

const App: React.FunctionComponent<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <title>Next SPA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
