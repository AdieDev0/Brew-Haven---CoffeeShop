import React from "react";
import coffeePerson from "../assets/CoffeePerson.jpg";

const AboutOurShop = () => {
  return (
    <div className="flex flex-col md:flex-row pt-16 md:pt-32 px-8 md:px-20 lg:px-52 justify-between gap-10 md:gap-20">
      <div className="grid gap-5">
        <h1 className="font-Kanit text-2xl md:text-4xl font-semibold">
          ABOUT OUR COFFEE SHOP
        </h1>
        <p className="font-sans font-medium text-2xl md:text-2xl">
          Coffee Distribution
        </p>
        <p className="font-Kanit text-sm md:text-base lg:text-lg">
          With a perfectly balanced blend of flavors, this coffee captures the
          essence of a rich and invigorating brew. Unlike generic content, this
          coffee description makes it feel like you're savoring every sip. Many
          coffee enthusiasts and baristas appreciate this unique combination, as
          it stands out from the usual descriptions, making it an irresistible
          choice for any coffee lover.
        </p>
        <button className="text-red-600 text-xs md:text-sm lg:text-base w-52 font-Kanit border border-red-600 hover:text-black hover:border-black duration-200 rounded-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4">
          READ MORE
        </button>
      </div>
      <div>
        <img src={coffeePerson} alt="coffeePerson" className="rounded-lg w-full md:w-auto" />
      </div>
    </div>
  );
};

export default AboutOurShop;
