import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const centerCoordinates = {
  lat: 14.540867, // Latitude for Bonifacio Global City
  lng: 121.050316, // Longitude for Bonifacio Global City
};

const MapApi = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDz6Ksxzwrk5KMWjqqF0og7P61qXKzitA4`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setMapLoaded(true); // Indicate map is loaded
      // Initialize map
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: centerCoordinates,
        zoom: 12,
      });

      // Add marker
      new window.google.maps.Marker({
        position: centerCoordinates,
        map: map,
      });
    };

    script.onerror = () => {
      alert("Failed to load Google Maps. Please try again later.");
    };

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Google Map Container with Motion Animation */}
      <motion.div
        id="map"
        style={containerStyle}
        className="shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: mapLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Optional Footer or Info Section */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-700 font-Kanit">
          Find us at our Bonifacio Global City location.
        </p>
      </div>
    </div>
  );
};

export default MapApi;
