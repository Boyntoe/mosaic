import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import Card from "./card";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className="flex justify-center m-4">
      <Card>
        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-7/12">
            <CoverImage title={title} src={coverImage} slug={slug} />
          </div>
          <div className="md:grid-rows-2 md:w-5/12 mb-4 m-4 ml-6 mr-6">
            <div>
              <h3 className="mb-4 text-4xl">
                <Link
                  as={`/posts/${slug}`}
                  href="/posts/[slug]"
                  className="hover:text-blue-600 transition-colors"
                >
                  {title}
                </Link>
              </h3>
              <div className="mb-0 text-lg">
                <DateFormatter dateString={date} />
              </div>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
              <Avatar name={author.name} picture={author.picture} />
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default HeroPost;
