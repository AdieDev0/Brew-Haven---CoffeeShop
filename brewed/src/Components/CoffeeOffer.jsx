import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import capu from "../assets/CoffeeOfferImage/Capu.jpg";

const CoffeeOffer = () => {
  const handleDragStart = (e) => e.preventDefault();

  // Define the items for the carousel
  const items = [
    <img
      src={capu}
      onDragStart={handleDragStart}
      role="presentation"
      alt="Cappuccino"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 1"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
    <img
      src="path-to-img"
      onDragStart={handleDragStart}
      role="presentation"
      alt="Coffee 2"
    />,
  ];

  return (
    <div className="pt-32">
      <div>
        <h1 className="font-Kanit text-center text-2xl md:text-4xl font-semibold">
          OUR COFFEE OFFER
        </h1>
      </div>
      <div className="mt-8">
        {/* AliceCarousel to display coffee images */}
        <div>
          <AliceCarousel mouseTracking items={items} />
        </div>
      </div>
    </div>
  );
};

export default CoffeeOffer;
