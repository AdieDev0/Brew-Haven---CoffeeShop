import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import cus1 from "../assets/saysCustomer/customer1.jpg";
import cus2 from "../assets/saysCustomer/customer2.jpg";
import cus3 from "../assets/saysCustomer/customer3.jpg";
import cus4 from "../assets/saysCustomer/customer4.jpg";
import cus5 from "../assets/saysCustomer/customer5.jpg";
import cus6 from "../assets/saysCustomer/customer6.jpg";
import cus7 from "../assets/saysCustomer/customer7.jpg";
import cus8 from "../assets/saysCustomer/customer8.jpg";

// react icons
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Card = ({ image, name, comments }) => (
  // CARDS
  <div className="flex flex-col lg:flex-row gap-5">
    <img
      src={image}
      alt="/"
      className="w-full  lg:w-80 object-cover rounded-md"
    />
    <div className="">
      <h1 className="font-Kanit font-semibold text-2xl md:text-3xl">{name}</h1>
      <p className="font-Kanit text-sm lg:text-lg lg:mr-60 text-gray-700">
        {comments}
      </p>
    </div>
  </div>
);

const SaysCustomer = () => {
  const items = [
    <Card
      image={cus1}
      name="Rod"
      comments="Absolutely delightful experience! The coffee selection here is incredible, and each cup is brewed to perfection. The ambiance of the shop is warm and inviting, making it the perfect place to relax and enjoy a cup of coffee. Ordering from their website was also a breeze, with a seamless and intuitive interface. I'll definitely be coming back for more!"
    />,
    <Card
      image={cus2}
      name="Jessica"
      comments="A cozy spot with amazing flavors. The range of coffee and specialty drinks is fantastic, and the baristas are incredibly skilled. The website makes it easy to place orders ahead of time, ensuring I get my favorite drink even during the busiest hours. The friendly atmosphere and delicious coffee make this my go-to spot for any occasion."
    />,
    <Card
      image={cus3}
      name="Nicole"
      comments="Perfect place to unwind. The quality of coffee here is exceptional, and the cozy seating areas make it an ideal location for reading or working. I appreciate how user-friendly their website is for placing orders, allowing me to quickly grab my coffee on the go without any hassle. This coffee shop has definitely won me over with its charm and convenience."
    />,
    <Card
      image={cus4}
      name="Mary"
      comments="Loved every sip! The coffee here is top-notch, and the staff always goes above and beyond to provide excellent service. Ordering through their website is convenient and hassle-free, with a smooth and quick process. The welcoming atmosphere and consistently great coffee keep me coming back. Highly recommend this place to all coffee lovers!"
    />,
    <Card
      image={cus5}
      name="Emma"
      comments="A hidden gem! The coffee here is outstanding, and the staff's passion for brewing the perfect cup is evident in every sip. The website is user-friendly and makes it simple to customize my orders. I can't get enough of the tranquil ambiance and exceptional service. This is my new favorite spot!"
    />,
    <Card
      image={cus6}
      name="Aiden"
      comments="Simply the best! The variety of coffee and the expertise of the baristas make this place stand out. The website is straightforward to use, and placing an order ahead of time is a lifesaver during the morning rush. The inviting atmosphere and superb coffee keep me coming back time and time again."
    />,
    <Card
      image={cus7}
      name="Ava"
      comments="Incredible coffee and great service. The range of flavors and the quality of the brews are top-tier. The website is well-designed and easy to navigate, which makes ordering my favorite drinks a hassle-free experience. The welcoming vibe and consistently excellent coffee make this place a standout."
    />,
    <Card
      image={cus8}
      name="Marco"
      comments="Exceptional in every way. The coffee is always delicious, and the staff is friendly and knowledgeable. Ordering through their website is efficient and convenient, perfect for when I'm in a rush. The cozy environment and amazing coffee make this my go-to spot for both work and relaxation."
    />,
  ];

  return (
    // BODY
    <div className="bg-gray-100 py-16 px-5 lg:px-60">
      <p className="font-Kanit text-4xl text-gray-800 font-semibold mb-10">
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
              className="absolute top-[500px] left-28 lg:left-[990px] lg:right-0 lg:top-1/2 transform -translate-y-1/2 bg-stone-600 text-white size-12 rounded-md flex items-center justify-center shadow-lg hover:bg-red-700 transition"
              aria-label="Previous"
            >
              <GrFormPrevious />
            </button>
          )}
          renderNextButton={() => (
            <button
              className="absolute top-[500px] right-28 lg:right-0 lg:top-1/4 transform -translate-y-1/2 bg-red-600 text-white size-12 rounded-md flex items-center justify-center shadow-lg hover:bg-red-700 transition"
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
