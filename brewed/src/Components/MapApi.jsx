import React, { useEffect } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const centerCoordinates = {
  lat: 14.540867, // Latitude
  lng: 121.050316, // Longitude
};

const MapApi = () => {
  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDz6Ksxzwrk5KMWjqqF0og7P61qXKzitA4`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
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

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Google Map Container */}
      <div id="map" style={containerStyle} className="shadow-lg"></div>

      {/* Footer */}
    </div>
  );
};

export default MapApi;
