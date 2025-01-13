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
          className="w-full h-[500px] md:h-[600px] object-cover"
        />
        <div className="bg-black absolute inset-0 opacity-50"></div>
      </div>

      {/* Navbar */}
      <div className="absolute top-2 md:top-0 left-0 w-full">
        <Navbar />
      </div>

      {/* Hero Text */}
      <div className="absolute top-20 left-5 md:top-40 md:left-20 lg:top-48 lg:left-36">
        <h1 className="font-Kanit font-bold text-white text-5xl md:text-7xl lg:text-8xl w-60 md:w-auto">
          BREWED COFFEE
        </h1>
        <p className="font-Kanit font-medium text-base md:text-lg lg:text-xl text-white mt-4">
          A balanced blend of coffee beans
        </p>
        <div className="flex gap-4 mt-8">
          <button className="text-white text-xs md:text-lg lg:text-xl font-Kanit bg-red-600 rounded-lg px-5 md:px-8 lg:px-10 py-3 md:py-4">
            ABOUT US
          </button>
          <button className="text-black text-xs md:text-lg lg:text-xl font-Kanit bg-white hover:bg-red-600 hover:text-white duration-200 rounded-lg px-5 md:px-8 lg:px-10 py-3 md:py-4">
            CALL NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
