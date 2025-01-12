import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import Logo from "../assets/LogoNav.png";
const Navbar = () => {
  return (
    <div className="px-36 py-4 bg-pink-200">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center">
          <img src={Logo} alt="/" className="size-20" />
          <h1 className="font-Syncopate font-medium text-2xl">BREW HAVEN</h1>
        </div>
        <div className="flex gap-14">
          <h1 className="font-BarlowCondensed text-2xl cursor-pointer">Home</h1>
          <h1 className="font-BarlowCondensed text-2xl cursor-pointer">
            About
          </h1>
          <h1 className="font-BarlowCondensed text-2xl cursor-pointer">
            Coffees
          </h1>
          <h1 className="font-BarlowCondensed text-2xl cursor-pointer">Shop</h1>
          <h1 className="font-BarlowCondensed text-2xl cursor-pointer">Blog</h1>
          <h1 className="font-BarlowCondensed text-2xl cursor-pointer">
            Contact
          </h1>
        </div>
        {/* Login */}
        <div className="flex gap-10 items-center">
          <button className="flex items-center text-xl font-medium gap-1">
            <IoPersonCircleOutline />
            Login
          </button>
          <LuSearch className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
