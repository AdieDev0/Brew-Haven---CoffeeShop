import React from "react";
import CoffeeGuy from "../assets/OurBlog/CoffeeGuy.jpg";
import Espresso from "../assets/OurBlog/espresso.jpg";

const OurBlog = () => {
  return (
    <div className="bg-gray-100 py-16 px-5 lg:px-20">
      <h1 className="font-Kanit text-3xl md:text-4xl text-gray-800 font-semibold mb-10 text-center">
        OUR COFFEE BLOG
      </h1>
      {/* Blog Cards */}
      <div className="flex flex-wrap gap-5 justify-center">
        {/* Card 1 */}
        <div className="max-w-sm shadow-lg rounded-xl overflow-hidden bg-white">
          <img
            src={CoffeeGuy}
            alt="Coffee Preparation"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="font-Kanit font-semibold text-xl text-gray-900">
              Brewing the Perfect Cup
            </h2>
            <p className="font-Kanit text-gray-700 mt-3 text-sm md:text-base">
              Discover tips and techniques to brew the perfect cup of coffee at
              home. From grind size to brewing time, we cover all the essentials
              for a rich and flavorful experience.
            </p>
          </div>
          <div className="p-5">
            <button className="text-red-600 text-sm md:text-base w-full font-Kanit border border-red-600 hover:text-white hover:bg-red-600 duration-200 rounded-lg py-2">
              READ MORE
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="max-w-sm shadow-lg rounded-xl overflow-hidden bg-white">
          <img
            src={Espresso}
            alt="Espresso Preparation"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="font-Kanit font-semibold text-xl text-gray-900">
              Mastering Espresso Techniques
            </h2>
            <p className="font-Kanit text-gray-700 mt-3 text-sm md:text-base">
              Learn the art of making espresso like a pro. Explore tips on
              tamping, extraction time, and achieving the perfect crema for
              every shot.
            </p>
          </div>
          <div className="p-5">
            <button className="text-red-600 text-sm md:text-base w-full font-Kanit border border-red-600 hover:text-white hover:bg-red-600 duration-200 rounded-lg py-2">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
