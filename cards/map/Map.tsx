/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Map.module.css";

interface MapProps {
  isMobileView?: boolean;
}

const Map: React.FC<MapProps> = ({ isMobileView }) => {
  return (
    <>
      {isMobileView ? (
        <div className={styles.container}>
          <div className={styles.location}>
            <img src="/images/target.svg" />
            <p>NEW YORK CITY</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <div className={styles.content}>00°00'00.0"N 00°00'00.0"E</div>
            </div>
            <div className={styles.button}>
              <div className={styles.content}>
                <p>NAVIGATE</p>
                <img src="/images/navigate.svg" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.desktopContainer}>
          <div className={styles.location}>
            <img src="/images/target.svg" />
            <p>NEW YORK CITY</p>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <div className={styles.content}>00°00'00.0"N 00°00'00.0"E</div>
            </div>
            <div className={styles.button}>
              <div className={styles.content}>
                <p>NAVIGATE</p>
                <img src="/images/navigate.svg" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Map;
