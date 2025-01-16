import React from "react";
import GetInTouch from "../Components/GetInTouch";
import Navbar from "../Components/Navbar";
import BGimg from "../assets/BGimg.jpg";
import Footer from "../Components/Footer";
import MapApi from "../Components/MapApi";
const Contact = () => {
  return (
    <div>
      <div
        className="relative w-full h-[65px] md:h-[90px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BGimg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}

      <div className="mb-20">
        <GetInTouch />
        <MapApi />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
