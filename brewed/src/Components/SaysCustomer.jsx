import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import cus1 from "../assets/SaysCustomer/customer1.jpg";
import cus2 from "../assets/SaysCustomer/customer2.jpg";
import cus3 from "../assets/SaysCustomer/customer3.jpg";
import cus4 from "../assets/SaysCustomer/customer4.jpg";

const Card = ({ image, name, comments }) => (
  <div className="flex">
    <img src={image} alt="/" className="w-80 object-cover"/>
    <div>
      <h1>{name}</h1>
      <p>{comments}</p>
    </div>
  </div>
);

const SaysCustomer = () => {
  const items = [
    <Card
      image={cus1}
      name="Alison"
      comments="Absolutely delightful experience!"
    />,
    <Card
      image={cus2}
      name="Jessica"
      comments="A cozy spot with amazing flavors."
    />,
    <Card image={cus3} name="Adie" comments="Perfect place to unwind." />,
    <Card image={cus4} name="Mary" comments="Loved every sip!" />,
  ];

  return (
    <div className="bg-gray-100 pt-16 px-32">
      <p className="font-Kanit text-4xl text-gray-800 font-semibold">
        WHAT SAYS CUSTOMER
      </p>
      {/* Carousel */}
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-stone-600 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg hover:bg-red-700 transition"
              aria-label="Previous"
            >
              &#8249;
            </button>
          )}
          renderNextButton={() => (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg hover:bg-red-700 transition"
              aria-label="Next"
            >
              &#8250;
            </button>
          )}
        />
      </div>
    </div>
  );
};

export default SaysCustomer;
