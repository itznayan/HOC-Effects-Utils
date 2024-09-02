import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-white h-20 flex items-center font-mono text-4xl font-bold justify-between px-20 ">
      <div>Company Logo</div>
      <div className="flex gap-20 items-center">
        <Link to={"/"}>
          <h3 className="hover:text-gray-200 duration-300 hover:tracking-widest hover:border-b-2 cursor-pointer">
            Home
          </h3>
        </Link>
        <Link to={"contact"}>
          <h3 className="hover:text-gray-200 duration-300 hover:tracking-widest hover:border-b-2 cursor-pointer">
            Contact
          </h3>
        </Link>
        <Link to={"about"}>
          <h3 className="hover:text-gray-200 duration-300 hover:tracking-widest hover:border-b-2 cursor-pointer">
            About
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
