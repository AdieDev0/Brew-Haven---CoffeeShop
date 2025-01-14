import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import AboutOurShop from "../Components/AboutOurShop.jsx";
import CoffeeOffer from "../Components/CoffeeOffer.jsx";
import SaysCustomer from "../Components/SaysCustomer.jsx";
const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <AboutOurShop />
        <CoffeeOffer />
        <SaysCustomer />
      </div>
    </div>
  );
};

export default Home;
