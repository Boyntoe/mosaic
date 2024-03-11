import Link from "next/link";
import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};
export function formatDateString(dateString: string) {
  return format(parseISO(dateString), "LLLL yyyy")
}
const DateFormatter = ({ dateString }: Props) => {
  const date = formatDateString(dateString);
  return <Link 
    href={`/editions/${date.toLowerCase().replace(/\s/, "_")}`}
    className="hover:text-blue-600 transition-colors"
    >
    <time dateTime={dateString}>{date}</time>
  </Link>;
};

export default DateFormatter;
