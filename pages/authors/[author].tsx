import { useRouter } from "next/router";
import MoreStories from "../../components/more-stories";
import ErrorPage from "next/error";
import Avatar from "../../components/avatar";
import Layout from "../../components/layout";
import { getUrlString, getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import type PostType from "../../interfaces/post";

type Props = {
  posts: PostType[];
  preview?: boolean;
};

export default function Author({ posts, preview }: Props) {
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
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <MoreStories posts={posts} />
      )}
    </Layout>
  );
}

type Params = {
  params: {
    author: string,
  };
};

export async function getStaticProps({ params }: Params) {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "tags",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]).filter(post => getUrlString(post.author.name) === params.author);

  return {
    props: {
      posts
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["author"]);
  return {
    paths: Array.from(new Set(posts.map((post) => {
      return {
        params: {
          author: getUrlString(post.author.name),
        },
      };
    }))),
    fallback: false,
  };
}