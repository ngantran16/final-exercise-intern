import React from 'react';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, withLeaflet } from 'react-leaflet';

import './Search.scss';

const BookingMap = () => {
    // // const bookingMap = () => {
    //     var mymap = L.map('mapid').setView([50.27264, 7.26469], 13);
    //         console.log(mymap);
    //         L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mymap);
    //         var control = L.Routing.control({
    //         waypoints: [
    //             L.latLng(38.7436056, -9.2304153),
    //             L.latLng(38.5334477, -0.1312811)
    //         ],
    //         router: new L.Routing.osrmv1({
    //             language: 'en',
    //             profile: 'car'
    //         }),
    //         geocoder: L.Control.Geocoder.nominatim({})
    //         }).addTo(mymap);
    //     // return mymap;
    // // }
      
    const position = [51.505, -0.09];
    return (
        <MapContainer className="map" id="mapid" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    )

}

export default BookingMap;