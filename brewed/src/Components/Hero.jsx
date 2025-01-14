import React from "react";
import BGimg from "../assets/BGimg.jpg";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background image with overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <img
          src={BGimg}
          alt="Background"
          className="w-full h-[500px] md:h-[600px] object-cover"
        />
        <div className="bg-black absolute inset-0 opacity-50"></div>
      </motion.div>

      {/* Navbar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-2 md:top-0 left-0 w-full"
      >
        <Navbar />
      </motion.div>

      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="absolute top-20 left-5 md:top-40 md:left-20 lg:top-48 lg:left-36"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="font-Kanit font-bold text-white text-5xl md:text-7xl lg:text-8xl w-60 md:w-auto"
        >
          BREWED COFFEE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="font-Kanit font-medium text-base md:text-lg lg:text-xl text-white mt-4"
        >
          A balanced blend of coffee beans
        </motion.p>
        <div className="flex gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white text-xs md:text-lg lg:text-xl font-Kanit bg-red-600 rounded-lg px-5 md:px-8 lg:px-10 py-3 md:py-4"
          >
            ABOUT US
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-black text-xs md:text-lg lg:text-xl font-Kanit bg-white hover:bg-red-600 hover:text-white duration-200 rounded-lg px-5 md:px-8 lg:px-10 py-3 md:py-4"
          >
            CALL NOW
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
