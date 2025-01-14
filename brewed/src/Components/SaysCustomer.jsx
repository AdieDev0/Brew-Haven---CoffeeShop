import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import cus1 from "../assets/SaysCustomer/customer1.jpg";
import cus2 from "../assets/SaysCustomer/customer2.jpg";
import cus3 from "../assets/SaysCustomer/customer3.jpg";
import cus4 from "../assets/SaysCustomer/customer4.jpg";

const Card = ({ image, name, comments }) => (
  // CARDS
  <div className="flex gap-5">
    <img src={image} alt="/" className="w-80 object-cover" />
    <div className="">
      <h1 className="font-Kanit font-semibold text-3xl">{name}</h1>
      <p className="font-Kanit mr-60">{comments}</p>
    </div>
  </div>
);

const SaysCustomer = () => {
  const items = [
    <Card
      image={cus1}
      name="Alison"
      comments="Absolutely delightful experience! The coffee selection here is incredible, and each cup is brewed to perfection. The ambiance of the shop is warm and inviting, making it the perfect place to relax and enjoy a cup of coffee. Ordering from their website was also a breeze. I'll definitely be coming back for more!"
    />,
    <Card
      image={cus2}
      name="Jessica"
      comments="A cozy spot with amazing flavors. The range of coffee and specialty drinks is fantastic, and the baristas are incredibly skilled. The website makes it easy to place orders ahead of time, ensuring I get my favorite drink even during the busiest hours. The friendly atmosphere and delicious coffee make this my go-to spot."
    />,
    <Card
      image={cus3}
      name="Nicole"
      comments="Perfect place to unwind. The quality of coffee here is exceptional, and the cozy seating areas make it an ideal location for reading or working. I appreciate how user-friendly their website is for placing orders, allowing me to quickly grab my coffee on the go. This coffee shop has definitely won me over."
    />,
    <Card
      image={cus4}
      name="Mary"
      comments="Loved every sip! The coffee here is top-notch, and the staff always goes above and beyond to provide excellent service. Ordering through their website is convenient and hassle-free. The welcoming atmosphere and consistently great coffee keep me coming back. Highly recommend this place to all coffee lovers!"
    />,
  ];

  return (
    // BODY
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
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-stone-600 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg hover:bg-red-700 transition"
              aria-label="Previous"
            >
              &#8249;
            </button>
          )}
          renderNextButton={() => (
            <button
              className="absolute right-0 top-1/4 transform -translate-y-1/2 bg-red-600 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg hover:bg-red-700 transition"
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
