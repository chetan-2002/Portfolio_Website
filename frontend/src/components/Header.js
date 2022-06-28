import React from "react";

const Header = () => {
  return (
    <nav className="flex flex-row space-x-96">
      <a href="/" className="w-30 h-24">
        <img src="./images/logo1.png" alt="Ct"></img>
      </a>
      <ul className="flex flex-row space-x-4 md:space-x-10 md:py-6 md:text-2xl justify-center md:justify-end font-thin">
        <li>
          <a
            href="#projects"
            className="py-3 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="py-3 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="./Resume - Chetan Thakral.pdf"
            target="_blank"
            rel="noreferrer"
            className="py-3 px-5 hover:bg-gray focus:bg-gray rounded-lg"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
