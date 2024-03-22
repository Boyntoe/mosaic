import Layout from "../components/layout";
import Head from "next/head";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us</title>
      </Head>
      <p>Mosaic is an independent magazine that publishes fiction, nonfiction and essays. The goal of Mosaic is to be a place that uplifts writers, shares
    heartfelt stories, and fosters creative community.  
      </p>
    </Layout>
  );
}
