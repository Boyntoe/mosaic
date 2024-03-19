import Link from "next/link";

type Props = {
  name: string;
};

const Tag = ({ name }: Props) => {
  return (
    <>
      <p className="inline ml-2 mr-2">·</p>
      <Link href={`/tags/${name.toLowerCase().replace(/\s/, "_")}`} className="hover:text-blue-600 transition-colors block w-fit inline">
        <div className="w-fit inline">{name}</div>
      </Link>
    </>
  );
};

export default Tag;
