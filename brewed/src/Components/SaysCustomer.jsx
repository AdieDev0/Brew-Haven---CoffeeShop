import React from "react";
import { motion } from "framer-motion";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import cus1 from "../assets/SaysCustomer/customer1.jpg";
import cus2 from "../assets/SaysCustomer/customer2.jpg";
import cus3 from "../assets/SaysCustomer/customer3.jpg";
import cus4 from "../assets/SaysCustomer/customer4.jpg";
import cus5 from "../assets/SaysCustomer/customer5.jpg";
import cus6 from "../assets/SaysCustomer/customer6.jpg";
import cus7 from "../assets/SaysCustomer/customer7.jpg";
import cus8 from "../assets/SaysCustomer/customer8.jpg";

// react icons
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// Card Component
const Card = ({ image, name, comments }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="flex flex-col lg:flex-row gap-5 bg-white p-5 rounded-lg shadow-md"
  >
    <motion.img
      src={image}
      alt={name}
      className="w-full lg:w-80 object-cover rounded-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
    <div>
      <h1 className="font-Kanit font-semibold text-2xl md:text-3xl mb-2 text-gray-800">
        {name}
      </h1>
      <p className="font-Kanit text-sm lg:text-lg text-gray-700">
        {comments}
      </p>
    </div>
  </motion.div>
);

const SaysCustomer = () => {
  const items = [
    <Card
      image={cus1}
      name="Rod"
      comments="Absolutely delightful experience! The coffee selection here is incredible, and each cup is brewed to perfection..."
    />,
    <Card
      image={cus2}
      name="Jessica"
      comments="A cozy spot with amazing flavors. The range of coffee and specialty drinks is fantastic..."
    />,
    <Card
      image={cus3}
      name="Nicole"
      comments="Perfect place to unwind. The quality of coffee here is exceptional, and the cozy seating areas make it an ideal location..."
    />,
    <Card
      image={cus4}
      name="Mary"
      comments="Loved every sip! The coffee here is top-notch, and the staff always goes above and beyond to provide excellent service..."
    />,
    <Card
      image={cus5}
      name="Emma"
      comments="A hidden gem! The coffee here is outstanding, and the staff's passion for brewing the perfect cup is evident..."
    />,
    <Card
      image={cus6}
      name="Aiden"
      comments="Simply the best! The variety of coffee and the expertise of the baristas make this place stand out..."
    />,
    <Card
      image={cus7}
      name="Ava"
      comments="Incredible coffee and great service. The range of flavors and the quality of the brews are top-tier..."
    />,
    <Card
      image={cus8}
      name="Marco"
      comments="Exceptional in every way. The coffee is always delicious, and the staff is friendly and knowledgeable..."
    />,
  ];

  return (
    <div className="bg-gray-100 py-16 px-5 lg:px-60">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-Kanit text-4xl text-gray-800 font-semibold mb-10 text-center"
      >
        WHAT OUR CUSTOMERS SAY
      </motion.p>

      <div className="relative">
        <AliceCarousel
          items={items}
          responsive={{
            0: { items: 1 },
            600: { items: 1 },
            1024: { items: 1 },
          }}
          infinite
          autoPlay
          autoPlayInterval={4000}
          disableDotsControls
          renderPrevButton={() => (
            <button
              className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-stone-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition"
              aria-label="Previous"
            >
              <GrFormPrevious />
            </button>
          )}
          renderNextButton={() => (
            <button
              className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition"
              aria-label="Next"
            >
              <GrFormNext />
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default SaysCustomer;
