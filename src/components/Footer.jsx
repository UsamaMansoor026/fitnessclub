import React from "react";

const Footer = () => {
  return (
    <div className="text-center pt-16 pb-8 bg-[var(--dark)] text-gray-600">
      {/* flex flex-col lg:flex-row justify-center items-center */}
      <ul className="md:hidden grid grid-cols-2 px-[60px] gap-4 gap-y-7 text-lg font-semibold capitalize py-6">
        <li className="text-gray-400 border-2 py-1 px-5 rounded-md shadow-lg shadow-blue-900 border-blue-600 hover:text-blue-600 duration-200 ">
          <a href="/">about us</a>
        </li>
        <li className="text-gray-400 border-2 py-1 px-5 rounded-md shadow-lg shadow-blue-900 border-blue-600 hover:text-blue-600 duration-200">
          <a href="/">services</a>
        </li>
        <li className="text-gray-400 border-2 py-1 px-5 rounded-md shadow-lg shadow-blue-900 border-blue-600 hover:text-blue-600 duration-200">
          <a href="/">portfolio</a>
        </li>
        <li className="text-gray-400 border-2 py-1 px-5 rounded-md shadow-lg shadow-blue-900 border-blue-600 hover:text-blue-600 duration-200">
          <a href="/">blog</a>
        </li>
        <li className="text-gray-400 border-2 py-1 px-5 rounded-md shadow-lg shadow-blue-900 border-blue-600 hover:text-blue-600 duration-200">
          <a href="/">shop</a>
        </li>
      </ul>
      <div>
        Template by{" "}
        <a
          href="https://www.mobirise.com"
          target="_blank"
          className="uppercase font-bold text-xl pt-2"
        >
          Mobirise
        </a>
      </div>
    </div>
  );
};

export default Footer;
