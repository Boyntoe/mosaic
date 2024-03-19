import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import Card from "./card";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="flex justify-center h-100 m-4">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
        {posts.map((post) => (
          <Card>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              tags={post.tags}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </Card>
          ))}
      </div>
    </section>
  );
};

export default MoreStories;
