import React from "react";
import {
  MapContainer,
  TileLayer,
  useMap
} from "react-leaflet";
import * as L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function MyComponent() {
  const map = useMap();
  L.Routing.control({
    waypoints: [
      L.latLng(38.7436056, -9.2304153),
      L.latLng(38.5334477, -0.1312811),
    ],
    router: new L.Routing.osrmv1({
      language: "en",
      profile: "car",
    }),
    geocoder: L.Control.Geocoder.nominatim({}),
  }).addTo(map);

  return null;
}

const Booking = () => {
  return (
    <div>
      <Header />
      <MapContainer
        style={{ height: "85vh" }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyComponent />
      </MapContainer>
      <Footer />
    </div>
  );
};

export default Booking;