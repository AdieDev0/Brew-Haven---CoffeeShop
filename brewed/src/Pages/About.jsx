import React from "react";
import Navbar from "../Components/Navbar";
import AboutOurShop from "../Components/AboutOurShop";
import Footer from "../Components/Footer";
import BGimg from "../assets/BGimg.jpg";

const About = () => {
  return (
    <div>
      {/* Navbar Section with Background Image */}
      <div
        // The parent container for the background image
        // - `relative`: Ensures that child elements like the overlay and navbar can use absolute positioning relative to this container.
        // - `w-full`: Makes the container span the full width of the screen.
        // - `h-[200px] md:h-[300px]`: Sets a fixed height for the container, responsive for medium screens and larger.
        // - `bg-cover`: Ensures the background image covers the entire container.
        // - `bg-center`: Centers the background image within the container.
        className="relative w-full h-[65px] md:h-[90px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BGimg})` }} // Dynamically sets the background image.
      >
        {/* Black Overlay with Opacity and Blur */}
        <div
          // This overlay adds a semi-transparent black background with a blur effect.
          // - `absolute`: Positions the overlay over the entire parent container.
          // - `inset-0`: Stretches the overlay to cover all edges of the parent (`top: 0, left: 0, right: 0, bottom: 0`).
          // - `bg-black`: Sets the background color to black.
          // - `bg-opacity-50`: Makes the background semi-transparent (50% opacity).
          // - `backdrop-blur-md`: Adds a medium blur to the background, creating a frosted glass effect.
          className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
        ></div>

        {/* Navbar */}
        <div
          // The navbar is placed above the overlay and background image.
          // - `relative`: Ensures the Navbar is rendered on top of the overlay.
          // - `z-10`: Ensures this container has a higher stacking order than the overlay (z-index 10).
          className="relative z-10"
        >
          <Navbar />
        </div>
      </div>

      {/* Main Content */}

      <div className="mb-20">
        <AboutOurShop />
      </div>
      <Footer />
    </div>
  );
};

export default About;
