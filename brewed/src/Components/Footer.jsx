import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-brown-800 text-black py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About BREW HAVEN */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg font-bold mb-3 font-kanit">About BREW HAVEN</h2>
          <p className="text-sm font-Kanit">
            Nestled in the heart of Bonifacio Global City, BREW HAVEN is your
            sanctuary for premium coffee and a cozy atmosphere. Visit us to
            experience the perfect brew.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg font-bold mb-3 font-Kanit">Services</h2>
          <ul className="space-y-2 text-sm">
            <li className="font-Kanit">Specialty Coffee</li>
            <li className="font-Kanit">Pastries</li>
            <li className="font-Kanit">Events Hosting</li>
            <li className="font-Kanit">Catering</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg font-bold mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm font-Kanit">
            <li>Address: Bonifacio Global City, Philippines</li>
            <li>Phone: +63 912 345 6789</li>
            <li>Email: info@brewhaven.ph</li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-lg font-bold mb-3 font-Kanit">Newsletter</h2>
          <p className="text-sm mb-3 font-Kanit">
            Subscribe for updates on new brews, events, and offers.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg border border-black placeholder-black/60 text-black"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-Kanit px-4 py-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Social Media Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="mt-10 border-t border-white/30 pt-5 flex flex-col md:flex-row items-center justify-between"
      >
        <p className="text-sm font-Kanit">
          {new Date().getFullYear()} BREW HAVEN. DEV ADIE.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <FaFacebookF className="text-xl hover:text-orange-600 cursor-pointer" />
          <FaInstagram className="text-xl hover:text-orange-600 cursor-pointer" />
          <FaTwitter className="text-xl hover:text-orange-600 cursor-pointer" />
          <FaLinkedinIn className="text-xl hover:text-orange-600 cursor-pointer" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
