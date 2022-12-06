import { Map, TileLayer } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup } from "react-leaflet";

const ContactsPage = () => {
  const position = [51.505, -0.09];
  return (
    <>
      <h1>Contact Us</h1>
      <p>
        You can reach us by email at{" "}
        <a href="mailto:info@ecommercewebsite.com">info@ecommercewebsite.com</a>
        , or by phone at <a href="tel:+1234567890">+1 (234) 567-890</a>.
      </p>
      <p>Our store is located at the following address:</p>
      <address>
        123 Main Street
        <br />
        City, State 12345
        <br />
        United States
        </address>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
export default ContactsPage;
