import React from "react";
import { useApplicationContext } from "../../state/context";
import { Mirage } from "../../state/types";
import styles from "./MiniView.module.css";
import Timer from "../utils/Timer";

interface MiniProps {
  item: Mirage;
}

const MobileMini: React.FC<MiniProps> = ({ item }) => {
  const { isMobileView } = useApplicationContext();

  return (
    <div className={styles[isMobileView ? "container" : "desktopContainer"]}>
      <div className={styles[isMobileView ? "background" : "desktopBackground"]} >
        <img src="/images/golden_queen.png" />
      </div>
      <div className={styles.pieceInfo}>
        <div className={styles[isMobileView ? "pieceName" : "desktopPieceName"]} >
          {item.name.toUpperCase()}
        </div>
        <div className={styles[isMobileView ? "artist" : "desktopArtist"]}>
          @{item.artist.handle.toUpperCase()}
        </div>
        {/* TODO: See below
        <div className={styles.distance}>
          <img src="/images/arrow.png" />
          <p>0.1m</p>
        </div> */}
        <div className={styles.timer}>
          <img src="/images/liveHex.svg" />
          <p>
            <Timer
              start={item.dropStart}
              end={item.dropEnd}
            />
          </p>
        </div>
        {!isMobileView && <div className={styles.price}>0.002 ETH</div>}
      </div>
    </div>
  );
};

export default MobileMini;
