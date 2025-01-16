import React from "react";
import Footer from "../Components/Footer";
import CoffeeOffer from "../Components/CoffeeOffer";
import BGimg from "../assets/BGimg.jpg";
import Navbar from "../Components/Navbar";

const Coffees = () => {
  return (
    <div>
      <div
        // The parent container for the background image
        // - `relative`: Ensures that child elements like the overlay and navbar can use absolute positioning relative to this container.
        // - `w-full`: Makes the container span the full width of the screen.
        // - `h-[200px] md:h-[300px]`: Sets a fixed height for the container, responsive for medium screens and larger.
        // - `bg-cover`: Ensures the background image covers the entire container.
        // - `bg-center`: Centers the background image within the container.
        className="relative w-full h-[200px] md:h-[90px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BGimg})` }} 
      >
        {/* Black Overlay with Opacity and Blur */}
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
