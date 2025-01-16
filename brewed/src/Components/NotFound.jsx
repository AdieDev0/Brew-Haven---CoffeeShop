import React from "react";
import notFound from "../assets/404/NotFound.png";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="grid 5">
      <img src={notFound} alt="" className="size-20" />
      <h1 className="font-Kanit font-semibold">Not Found please back home.</h1>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
