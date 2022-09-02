/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./Mapbox.module.css";
import { useApplicationContext } from "../../state/context";
import { useSnackbar } from "material-ui-snackbar-provider";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmlpZ21udCIsImEiOiJjbDBkcXRwOHcwOWw0M2RrOWMydjhpN2o3In0.I6nZZg9gLK-ozUy4zRuZdQ";

function dmsString(deg: number, lng: boolean): string {
  var d = parseInt(deg.toString());
  var minfloat = Math.abs((deg - d) * 60);
  var m = Math.floor(minfloat);
  var secfloat = (minfloat - m) * 60;
  var s = Math.round((secfloat + Number.EPSILON) * 100) / 100;
  d = Math.abs(d);

  if (s == 60) {
    m++;
    s = 0;
  }
  if (m == 60) {
    d++;
    m = 0;
  }

  let dms = {
    dir: deg < 0 ? (lng ? "W" : "S") : lng ? "E" : "N",
    deg: d,
    min: m,
    sec: s,
  };
  return `${dms.deg}\u00B0${dms.min}'${dms.sec}"${dms.dir}`;
}

const Mapbox: React.FC = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const snackbar = useSnackbar();

  const { items, contract, defaultItem } = useApplicationContext();
  const mirage =
    items.find((item) => item.token.contractAddress == contract) || defaultItem;

  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/fiigmnt/cl4evbfs6001q14lqhwnmjo11",
      center: [mirage.longitude, mirage.latitude],
      zoom: zoom,
    });

    new mapboxgl.Marker(marker.current)
      .setLngLat([mirage.longitude, mirage.latitude])
      .addTo(map.current);
  });

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${mirage.latitude}, ${mirage.longitude}`);
    snackbar.showMessage("Copied!");
  };

  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <img src="/images/target.svg" /> NEW YORK CITY
      </div>
      <div className={styles.navigate}>
        <div className={styles.navigateContent}>
          <p>NAVIGATE IN APP</p> <img src="/images/hexSquareThing.svg" />
        </div>
      </div>
      <div className={styles.position}>
        <div className={styles.positionContent}>
          <p className={styles.north}> {dmsString(mirage.latitude, false)} </p>
          <p> {dmsString(mirage.longitude, true)}</p>{" "}
          <button className={styles.copy} onClick={copyToClipboard}>
            <img src="/images/stack.svg" />
          </button>
        </div>
      </div>
      <div ref={mapContainer} className={styles.mapContainer}></div>
      <div ref={marker}>
        <img src={"/images/mapMarker.svg"} />
      </div>
    </div>
  );
};

export default Mapbox;
