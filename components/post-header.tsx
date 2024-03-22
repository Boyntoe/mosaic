import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";
import Tag from "./tag";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags: [string];
  author: Author;
};

const PostHeader = ({ title, coverImage, date, tags, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        
      </div>
      <div className="md:mb-4 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-8 text-lg">
          <DateFormatter dateString={date} />
          {tags.map((tag, i) => <Tag name={tag} key={i}/>)}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
