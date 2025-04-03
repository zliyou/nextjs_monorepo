import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
  }
  
  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
  }

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout || ((page: ReactNode) => page)
    console.log('pageProps', Component)
    return getLayout(<Component {...pageProps} />);
  return <Layout>
    <Component {...pageProps} />
  </Layout>;
}
