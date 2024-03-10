import { useRouter } from "next/router";
import MoreStories from "../../components/more-stories";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Avatar from "../../components/avatar";
import PostHeader from "../../components/post-header";
import Layout from "../../components/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";

type Props = {
  posts: PostType[];
  preview?: boolean;
};

export default function Post({ posts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && posts?.length == 0) {
    return <ErrorPage statusCode={404} />;
  }
  const author = posts[0].author;
  return (
    <Layout preview={preview}>
      <Head>
        <title>{author.name}</title>
        <meta property="og:image" content={posts[0].author.picture} />
      </Head>
      <PostTitle>
        {
         //<img src={author.picture} className="w-24 h-24 rounded-full mr-4 inline" alt={author.name} />
        }
        {author.name}
      </PostTitle>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <MoreStories posts={posts} />
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    author: string;
  };
};

export async function getStaticProps({ params }: Params) {
  console.log("PARAMS", params)
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]).filter(post => post.author.name.toLowerCase().replace(/\s/, "_") === params.author);

  return {
    props: {
      posts
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug", "author"]);
  console.log("KJSDKJ");
  console.log(posts);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          author: post.author.name.toLowerCase().replace(/\s/, "_"),
        },
      };
    }),
    fallback: false,
  };
}
