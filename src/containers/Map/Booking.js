import React from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker, Popup
} from "react-leaflet";
import * as L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Booking.scss';

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

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

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
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        <MyComponent />
      </MapContainer>
      <Footer />
    </div>
  );
};

export default Booking;