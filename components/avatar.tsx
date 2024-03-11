import Link from "next/link";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <Link href={`/authors/${name.toLowerCase().replace(/\s/, "_")}`} className="hover:text-blue-600 transition-colors block w-fit">
      {
      //<img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      }
      <div className="text-xl font-bold w-fit">{name}</div>
    </Link>
  );
};

export default Avatar;
