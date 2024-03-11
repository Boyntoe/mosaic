import { useRouter } from "next/router";
import MoreStories from "../../components/more-stories";
import ErrorPage from "next/error";
import Avatar from "../../components/avatar";
import Layout from "../../components/layout";
import { getUrlString, getAllPosts } from "../../lib/api";
import { parseISO, format } from "date-fns";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import type PostType from "../../interfaces/post";

type Props = {
  posts: PostType[];
  preview?: boolean;
};

export function formatDateString(dateString: string) {
  return format(parseISO(dateString), "LLLL yyyy")
}

export default function Post({ posts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && posts?.length == 0) {
    return <ErrorPage statusCode={404} />;
  }
  const date = formatDateString(posts[0].date);
  return (
    <Layout preview={preview}>
      <Head>
        <title>{date}</title>
        <meta property="og:image" content={posts[0].ogImage.url} />
      </Head>
      <PostTitle>
        {
         //<img src={author.picture} className="w-24 h-24 rounded-full mr-4 inline" alt={author.name} />
        }
        {date}
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
    date: string,
  };
};

export async function getStaticProps({ params }: Params) {
  const posts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]).filter(post => getUrlString(formatDateString(post.date)) === params.date);
  return {
    props: {
      posts
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug", "date"]);
  return {
    paths: Array.from(new Set(posts.map((post) => {
      return {
        params: {
          date: getUrlString(formatDateString(post.date)),
        },
      };
    }))),
    fallback: false,
  };
}