import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BGimg from "../assets/BGimg.jpg";

const Shop = () => {
  return (
    <div>
      <div
        className="relative w-full h-[200px] md:h-[90px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BGimg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Welcome to Brew Haven
        </h1>
        <p className="text-lg text-center mb-12">
          Discover the finest coffee blends, brewed to perfection just for you.
        </p>
      </div>

      <Footer />
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Shop} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
