const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="py-8 flex flex-col lg:flex-row items-center">
        <p className="ml-4">
        Copyright {(new Date()).getFullYear()}
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
