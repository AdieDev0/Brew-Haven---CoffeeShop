import React from "react";
import BGimg from "../assets/BGimg.jpg";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background image with overlay */}
      <div className="relative">
        <img src={BGimg} alt="Background" className="w-full h-[600px] object-cover" />
        <div className="bg-black absolute inset-0 opacity-50"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      {/* TEXT IMAGE */}
    </div>
  );
};

export default Hero;
