import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import AboutOurShop from "../Components/AboutOurShop.jsx";
import CoffeeOffer from "../Components/CoffeeOffer.jsx";
import SaysCustomer from "../Components/SaysCustomer.jsx";
import OurBlog from "../Components/OurBlog.jsx";
import GetInTouch from "../Components/GetInTouch.jsx";
import MapApi from "../Components/MapApi.jsx";
const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <AboutOurShop />
        <CoffeeOffer />
        <SaysCustomer />
        <OurBlog />
        <GetInTouch />
        <MapApi />
      </div>
    </div>
  );
};

export default Home;
