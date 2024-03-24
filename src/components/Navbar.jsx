import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-6 px-12 shadow-xl">
      {/* Brand Name */}
      <h1 className="uppercase font-bold cursor-pointer text-[var(--light-text)] hover:text-black duration-200">
        FitnessClub
      </h1>
      {/* External Links */}
      <ul className="hidden md:flex lg:flex items-center gap-9 text-sm font-semibold capitalize">
        <li className="text-[var(--light-text)] hover:text-blue-600 duration-200">
          <a href="/">about us</a>
        </li>
        <li className="text-[var(--light-text)] hover:text-blue-600 duration-200">
          <a href="/">services</a>
        </li>
        <li className="text-[var(--light-text)] hover:text-blue-600 duration-200">
          <a href="/">portfolio</a>
        </li>
        <li className="text-[var(--light-text)] hover:text-blue-600 duration-200">
          <a href="/">blog</a>
        </li>
        <li className="text-[var(--light-text)] hover:text-blue-600 duration-200">
          <a href="/">shop</a>
        </li>
      </ul>
      {/* Call to action Button */}
      <div>
        <button
          type="button"
          className="bg-blue-600 text-white text-sm py-1.5 px-4 rounded-sm hover:bg-blue-800 duration-200"
        >
          Let's Talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
