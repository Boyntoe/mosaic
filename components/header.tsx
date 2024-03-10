import Link from "next/link";
import Image from 'next/image';

const Header = () => {
  return (
    <section className="pl-2 pr-2 pb-1 md:pb-0 bg-neutral-50 flex-col md:flex-row flex items-center md:justify-between md:mb-12 border-b border-neutral-200 sticky top-0 left-0">
      <Link href="/">
        <h1 className="text-5xl font-bold">
          Mosaic
        </h1>
      </Link>
      <h4 className="text-center">
        <Link
          href="/submissions"
          className="hover:text-blue-600 transition-colors mr-8"
        >
          Submissions
        </Link>
        <Link
          href="/about-us"
          className="hover:text-blue-600 transition-colors mr-8"
        >
          About Us
        </Link>
        <Link
          href="/contact"
          className="hover:text-blue-600 transition-colors mr-8"
        >
          Contact
        </Link>
      </h4>
      <Image src="/assets/instagram.svg" width={24} height={24} alt="Instagram"/>
    </section>
  );
};

export default Header;
