import React from "react";
import { motion } from "framer-motion";

const GetInTouch = () => {
  return (
    <div className="bg-gray-100 py-16 px-5 lg:px-60">
      <div className="text-center">
        {/* Title with Animation */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl text-gray-800 font-bold font-Kanit mb-10"
        >
          GET IN TOUCH
        </motion.h1>

        <div className="grid gap-3 md:gap-5 lg:gap-7 px-5 md:px-20 lg:px-44">
          {/* Input Fields with Animation */}
          <motion.input
            type="text"
            placeholder="Your Name"
            className="font-Kanit font-normal text-black placeholder-black/60 p-3 md:p-4 lg:p-5 border border-black/40 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="font-Kanit font-normal text-black placeholder-black/60 p-3 md:p-4 lg:p-5 border border-black/40 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.input
            type="tel"
            placeholder="Your Phone"
            className="font-Kanit font-normal text-black placeholder-black/60 p-3 md:p-4 lg:p-5 border border-black/40 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            className="font-Kanit font-normal text-black placeholder-black/60 p-3 md:p-4 lg:p-5 border border-black/40 rounded-lg resize-y"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          ></motion.textarea>
        </div>

        {/* Send Button with Animation */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-red-600 mt-10 text-xs md:text-sm lg:text-base w-32 md:w-40 lg:w-52 font-Kanit border border-red-600 hover:bg-red-600 hover:text-white hover:border-white duration-200 rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4"
        >
          SEND
        </motion.button>
      </div>
    </div>
  );
};

export default GetInTouch;
