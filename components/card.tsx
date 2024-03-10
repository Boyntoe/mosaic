type Props = {
  children?: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <div className="m-2 shadow-sm shadow-gray-500">{children}</div>;
};

export default Card;
