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

      {/* TEXT IMAGE */}
      <div className="absolute top-20 left-5 md:top-40 md:left-44">
        <h1 className="font-Kanit font-bold text-white  text-6xl md:text-8xl w-20">
          BREWED COFFEE
        </h1>
        <p className="font-Kanit font-medium text-lg md:text-xl text-white">
          a balanced blend of coffee beans
        </p>
        <div className="flex gap-2 mt-10">
          <button className="text-white text-sm md:text-xl font-Kanit bg-red-600 rounded-lg px-7 md:px-10 py-4">
            ABOUT US
          </button>
          <button className="text-black text-sm md:text-xl font-Kanit bg-white hover:bg-red-600 hover:text-white duration-200 rounded-lg px-7 md:px-10 py-4">
            CALL NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
