import React from "react";
import BGimg from "../assets/BGimg.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background image with overlay */}
      <div className="relative">
        <img
          src={BGimg}
          alt="Background"
          className="w-full h-[600px] object-cover"
        />
        <div className="bg-black absolute inset-0 opacity-50"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      {/* TEXT IMAGE */}
      <div className="absolute ">
        <h1>BREW COFFEE</h1>
        <p>a balanced blend of coffee beans</p>
        <div className="flex gap-2">
          <button>ABOUT US</button>
          <button>CALL NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
