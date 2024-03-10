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
      <p>Lorem Ipsum</p>
    </Layout>
  );
}
