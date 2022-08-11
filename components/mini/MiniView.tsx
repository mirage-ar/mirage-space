import React from "react";
import { useApplicationContext } from "../../state/context";
import { Mirage } from "../../state/types";
import styles from "./MiniView.module.css";
import Timer from "../utils/Timer"

interface MiniProps {
  item: Mirage;
}

const MobileMini: React.FC<MiniProps> = ({item}) => {
  const { isMobileView } = useApplicationContext();

  return isMobileView ? (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="/images/golden_queen.png" />
      </div>
      <div className={styles.pieceInfo}>
        <div className={styles.pieceName}>{item.name}</div>
        <div className={styles.artist}>@{item.artist.handle.toUpperCase()}</div>
        {/* TODO: See below
        <div className={styles.distance}>
          <img src="/images/arrow.png" />
          <p>0.1m</p>
        </div> */}
      </div>
    </div>
  ) : (
    <div className={styles.desktopContainer}>
      <div className={styles.desktopBackground}>
        <img src="/images/golden_queen.png" />
      </div>
      <div className={styles.pieceInfo}>
        <div className={styles.desktopPieceName}>{item.name.toUpperCase()}</div>
        <div className={styles.desktopArtist}>@{item.artist.handle.toUpperCase()}</div>
          {/* TODO: Fix this shit or dont use it or whatever
        <div className={styles.desktopDistance}>
          <img src="/images/arrow.png" />
          <p>0.1m</p>
        </div> */}
        <div className={styles.timer}>
          <img src="/images/liveHex.svg" />
          <p><Timer start={item.dropStart} end={item.dropEnd}/></p>
        </div>
        <div className={styles.price}>0.002 ETH</div>
      </div>
    </div>
  );
};

export default MobileMini;
