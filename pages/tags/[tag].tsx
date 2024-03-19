import { useRouter } from "next/router";
import MoreStories from "../../components/more-stories";
import ErrorPage from "next/error";
import Layout from "../../components/layout";
import { getUrlString, getAllPosts } from "../../lib/api";
import { parseISO, format } from "date-fns";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import type PostType from "../../interfaces/post";

type Props = {
  posts: PostType[];
  tag: string;
  preview?: boolean;
};

export function formatDateString(dateString: string) {
  return format(parseISO(dateString), "LLLL yyyy")
}

export default function Post({ posts, tag, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && posts?.length == 0) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Head>
        <title>{tag}</title>
        <meta property="og:image" content={posts[0].ogImage.url} />
      </Head>
      <PostTitle>
        {tag}
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
    tag: string,
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
  ]).filter(post => (new Set(post.tags.map(tag => getUrlString(tag)))).has(params.tag));
  return {
    props: {
      posts,
      tag: posts[0].tags.filter(t => getUrlString(t) === params.tag)[0],
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["tags"]);
  return {
    paths: Array.from(new Set(posts.flatMap((post) => {
      return post["tags"].map(tag => ({ params: { tag: getUrlString(tag) } }))
    }))),
    fallback: false,
  };
}