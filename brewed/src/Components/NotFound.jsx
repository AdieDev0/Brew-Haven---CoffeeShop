import React from "react";
import notFound from "../assets/404/NotFound.png";
const NotFound = () => {
  return (
    <div className="grid 5">
      <img src={notFound} alt="" className="size-20" />
      <h1 className="font-Kanit font-semibold">Not Found please back home.</h1>
      <Navlink to="/">
        <button>Home</button>
      </Navlink>
    </div>
  );
};

export default NotFound;
