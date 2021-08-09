import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import { Container } from "react-bootstrap";
import styles from "./Map.module.css";

const LocationPin = ({ text }) => (
  <div className={styles.pin}>
    <Icon className={styles.pinicon} />
    <p className={styles.pintext}>{text}</p>
  </div>
);

const Map = (props) => {
  const location = {
    address: "The Corso, Manly, NSW",
    center: {
      lat: 33.806,
      lng: -151.2948,
    },
  };

  const zoomLevel = 17;

  return (
    <Container className={styles.map}>
      <h2>Our Home, Manly Beach!</h2>

      <Container
        style={{ height: "100vh", width: "100%" }}
        className={styles.googlemap}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={props.GoogleMapReactlocation}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.center.lat}
            lng={location.center.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </Container>
    </Container>
  );
};

export default Map;
