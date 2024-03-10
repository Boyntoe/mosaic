import Layout from "../components/layout";
import Head from "next/head";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Contact() {
  return (
      <Layout>
        <Head>
          <title>Contact</title>
        </Head>
        <h1 className="text-5xl">Contact Us</h1>
        <p>Lorem Ipsum</p>
      </Layout>
  );
}
