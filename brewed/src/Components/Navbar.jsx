import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between">
        {/* LOGO */}
        <img src="" alt="" />
        <div className="flex gap-2">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Coffees</h1>
          <h1>Shop</h1>
          <h1>Blog</h1>
          <h1>Contact</h1>
        </div>
        {/* Login */}
        <button className="flex">
          <IoPersonCircleOutline />
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
