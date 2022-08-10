/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styles from "./Mapbox.module.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmlpZ21udCIsImEiOiJjbDBkcXRwOHcwOWw0M2RrOWMydjhpN2o3In0.I6nZZg9gLK-ozUy4zRuZdQ";

const Mapbox: React.FC = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const mapPoint = useRef(null);

  const [lng, setLng] = useState(-74.0099720717255);
  const [lat, setLat] = useState(40.71686631327536);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/fiigmnt/cl4evbfs6001q14lqhwnmjo11",
      center: [lng, lat],
      zoom: zoom,
    });

    //TODO: Get the map pings working right
    // new mapboxgl.Marker(mapPoint)
    //   .setLngLat([-74.0099720717255, 40.71686631327536])
    //   .addTo(map.current);
  });

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          message: "Foo",
          iconSize: [60, 60],
        },
        geometry: {
          type: "Point",
          coordinates: [-74.0099720717255, 40.71686631327536],
        },
      },
    ],
  };

  return (
    <div>
      <div className={styles.location}>
        <img src="/images/target.svg" /> NEW YORK CITY
      </div>
      <div className={styles.navigate}>
        <p>NAVIGATE IN APP</p> <img src="/images/hexSquareThing.svg" />
      </div>
      <div className={styles.position}>
        <p>00°00'00.0"N 00°00'00.0"E</p> <img src="/images/stack.svg" />
      </div>
      <div ref={mapContainer} className={styles.mapContainer}></div>
    </div>
  );
};

export default Mapbox;
