/**----------------------------------------------------------------------------------
 * The mapbox setup for viewing piece locations
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./Mapbox.module.css";
import { useApplicationContext } from "../../state/context";
import { useSnackbar } from "material-ui-snackbar-provider";
import { isSameAddress } from "../../components/utils/functions";

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
    sec: s.toFixed(0),
  };
  return `${dms.deg}\u00B0${dms.min}'${dms.sec}"${dms.dir}`;
}

const Mapbox: React.FC = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const snackbar = useSnackbar();

  const { items, contract, defaultItem, isMobileView } =
    useApplicationContext();
  const mirage =
    items.find((item) => isSameAddress(item.token.contractAddress, contract)) ||
    defaultItem;

  const [zoom, setZoom] = useState(14);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/fiigmnt/cl4evbfs6001q14lqhwnmjo11",
      center: [mirage.longitude, mirage.latitude],
      zoom: zoom,
    });

    new mapboxgl.Marker(marker.current)
      .setLngLat([mirage.longitude, mirage.latitude])
      .addTo(map.current);
  }, [mirage]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${mirage.latitude}, ${mirage.longitude}`);
    snackbar.showMessage("location copied to clipboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <img src="/images/target.svg" /> {mirage.cityName.toUpperCase()}
      </div>
      <div
        className={
          styles[isMobileView ? "buttonContainerMobile" : "buttonContainer"]
        }
      >
        <div className={styles.navigate}>
          <a
            href={`${isMobileView ? `mirage://navigate:${contract}` : "#"}`}
            className={
              styles[
                isMobileView ? "navigateContent" : "navigateContentDisabled"
              ]
            }
          >
            <p>NAVIGATE IN APP</p>
            <img src="/images/hexSquareThing.svg" />
          </a>
        </div>
        <div className={styles.position}>
          <a className={styles.positionContent} onClick={copyToClipboard}>
            <p>
              {dmsString(mirage.latitude, false)}{" "}
              {dmsString(mirage.longitude, true)}
            </p>

            <img src="/images/stack.svg" />
          </a>
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
