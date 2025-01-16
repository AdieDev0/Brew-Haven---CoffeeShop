import React from "react";
import notFound from "../assets/404/NotFound.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center"
    >
      <motion.img
        src={notFound}
        alt="404 Not Found"
        className="w-full max-w-md mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />
      <motion.h1
        className="text-2xl md:text-3xl font-Kanit font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Oops! Page Not Found
      </motion.h1>
      <motion.p
        className="text-gray-600 font-Kanit text-base md:text-lg mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        The page you’re looking for doesn’t exist or has been moved. Please go
        back home.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <NavLink to="/">
          <button className="px-6 py-2 font-Kanit bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </NavLink>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
