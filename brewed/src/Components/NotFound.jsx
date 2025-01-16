import React from "react";
import notFound from "../assets/404/NotFound.png";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
      <img
        src={notFound}
        alt="404 Not Found"
        className="w-full max-w-md mb-6"
      />
      <h1 className="text-2xl md:text-3xl font-Kanit font-semibold text-gray-800 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 text-base md:text-lg mb-6">
        The page you’re looking for doesn’t exist or has been moved. Please go back home.
      </p>
      <NavLink to="/">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Go Back Home
        </button>
      </NavLink>
    </div>
  );
};

export default NotFound;
