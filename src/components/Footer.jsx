const Footer = () => {
  return (
    <footer className="flex mx-auto border-t-2 border-cyan-300 items-center justify-between">
      <p className="m-[10px] font-semibold text-white">Visit My Socials!</p>
      <ul className="socials flex space-x-4 mx-2 text-white">
        <a href="#">
          <li className="linkedIn">LinkedIn</li>
        </a>
        <a href="#">
          <li className="github">GitHub</li>
        </a>
        <a href="#">
          <li className="instagram">Instagram</li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
