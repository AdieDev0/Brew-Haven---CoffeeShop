import React from "react";
import { motion } from "framer-motion";
import coffeePerson from "../assets/CoffeePerson.jpg";

const AboutOurShop = () => {
  return (
    <div className="flex flex-col md:flex-row pt-16 px-8 md:px-20 lg:px-52 justify-between gap-10 md:gap-20">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="grid gap-5"
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-Kanit text-2xl md:text-4xl font-semibold"
        >
          ABOUT OUR COFFEE SHOP
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-sans font-medium text-2xl md:text-2xl"
        >
          Coffee Distribution
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-Kanit text-sm md:text-base lg:text-lg"
        >
          With a perfectly balanced blend of flavors, this coffee captures the
          essence of a rich and invigorating brew. Unlike generic content, this
          coffee description makes it feel like you're savoring every sip. Many
          coffee enthusiasts and baristas appreciate this unique combination, as
          it stands out from the usual descriptions, making it an irresistible
          choice for any coffee lover.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-red-600 text-xs md:text-sm lg:text-base w-52 font-Kanit border border-red-600 hover:text-black hover:border-black duration-200 rounded-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4"
        >
          READ MORE
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src={coffeePerson}
          alt="Coffee Person"
          className="rounded-lg w-full md:w-auto"
        />
      </motion.div>
    </div>
  );
};

export default AboutOurShop;
