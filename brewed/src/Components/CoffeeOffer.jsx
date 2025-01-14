import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import capu from "../assets/CoffeeOfferImage/Capu.jpg";
import aesth from "../assets/CoffeeOfferImage/aesth.jpg";
import americano from "../assets/CoffeeOfferImage/americano.jpg";
import beans from "../assets/CoffeeOfferImage/beans.jpg";
import book from "../assets/CoffeeOfferImage/Book.jpg";
import burn from "../assets/CoffeeOfferImage/burn.jpg";
import chill from "../assets/CoffeeOfferImage/chill.jpg";
import donuts from "../assets/CoffeeOfferImage/Donuts.jpg";
import frap from "../assets/CoffeeOfferImage/frap.jpg";
import greeny from "../assets/CoffeeOfferImage/Greeny.jpg";
import mocha from "../assets/CoffeeOfferImage/mocha.jpg";
import mug from "../assets/CoffeeOfferImage/Mug.jpeg";
import study from "../assets/CoffeeOfferImage/Study.jpg";
import style from "../assets/CoffeeOfferImage/style.jpg";
// REACT ICONS
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// Card Component
const Card = ({ image, title, description }) => (
  // CARDS
  <div className="relative bg-stone-800 hover:bg-red-600 duration-200 text-white rounded-lg shadow-lg overflow-hidden mx-10">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold mb-2 font-Kanit">{title}</h3>
      <p className="text-sm mb-4 font-Kanit">{description}</p>
      <button className="px-4 py-2 text-sm font-semibold font-kanit bg-white text-gray-900 rounded-md hover:bg-transparent hover:border-white border hover:text-white  transition">
        READ MORE
      </button>
    </div>
  </div>
);

const CoffeeOffer = () => {
  const items = [
    <Card
      image={capu}
      title="Types of Coffee"
      description="Explore the various types of coffee and their unique flavors."
    />,
    <Card
      image={aesth}
      title="Bean Varieties"
      description="Learn about the different coffee beans and where they come from."
    />,
    <Card
      image={americano}
      title="Coffee & Pastry"
      description="Pair your coffee with delicious pastries for a perfect combo."
    />,
    <Card
      image={beans}
      title="Coffee To Go"
      description="Enjoy your favorite coffee on the move with our takeaway options."
    />,
    <Card
      image={book}
      title="Coffee & Books"
      description="Unwind with a great book and a perfect cup of coffee."
    />,
    <Card
      image={burn}
      title="Roasting Perfection"
      description="Discover the art of coffee bean roasting for the best flavor."
    />,
    <Card
      image={chill}
      title="Relaxing Moments"
      description="Sip and savor the calming essence of coffee."
    />,
    <Card
      image={donuts}
      title="Coffee & Donuts"
      description="Indulge in the classic pairing of coffee and donuts."
    />,
    <Card
      image={frap}
      title="Iced Coffee Delights"
      description="Cool down with our refreshing iced coffee options."
    />,
    <Card
      image={greeny}
      title="Eco-Friendly Brews"
      description="Experience our environmentally friendly coffee practices."
    />,
    <Card
      image={mocha}
      title="Chocolatey Bliss"
      description="Enjoy the rich and creamy taste of mocha coffee."
    />,
    <Card
      image={mug}
      title="Special Coffee Mugs"
      description="Find the perfect mug for your coffee experience."
    />,
    <Card
      image={study}
      title="Study & Sip"
      description="Boost your focus with a cup of freshly brewed coffee."
    />,
    <Card
      image={style}
      title="Stylish Cafes"
      description="Visit our stylish cafes for a premium coffee experience."
    />,
  ];

  return (
    // BODY
    <div className="pt-16 bg-gradient-to-b from-white via-gray-100 to-gray-100 px-6 lg:px-16">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        OUR COFFEE OFFER
      </h1>

      {/* Carousel */}
      <div className="relative">
        <AliceCarousel
          items={items}
          responsive={{
            0: { items: 1 },
            600: { items: 2 },
            1024: { items: 4 },
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
              <GrFormPrevious />
            </button>
          )}
          renderNextButton={() => (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white w-10 h-10 rounded-md flex items-center justify-center shadow-lg hover:bg-red-700 transition"
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

export default CoffeeOffer;
