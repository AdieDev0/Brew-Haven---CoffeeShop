import React from "react";
import Footer from "../Components/Footer";
import CoffeeOffer from "../Components/CoffeeOffer";
import BGimg from "../assets/BGimg.jpg";
import Navbar from "../Components/Navbar";

const Coffees = () => {
  return (
    <div>
      <div

        className="relative w-full h-[200px] md:h-[90px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BGimg})` }} 
      >
        
        <div
       
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
        ></div>

        {/* Navbar */}
        <div
     
          className="relative z-10"
        >
          <Navbar />
        </div>
      </div>

      {/* Main Content */}

      <div className="mb-20">
        <CoffeeOffer />
      </div>
      <Footer />
    </div>
  );
};

export default Coffees;
