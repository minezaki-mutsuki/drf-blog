import { Layout } from "@/component/layout/layout";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
