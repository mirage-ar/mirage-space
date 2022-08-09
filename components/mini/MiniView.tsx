import React from "react";
import { useApplicationContext } from "../../state/context";
import styles from "./MiniView.module.css";

const MobileMini: React.FC = () => {
  const { isMobileView } = useApplicationContext();

  return isMobileView ? (
    <div className={styles.container}>
      <div className={styles.background}>
        <img src="/images/golden_queen.png" />
      </div>
      <div className={styles.pieceInfo}>
        <div className={styles.pieceName}>THE GOLDEN QU...</div>
        <div className={styles.artist}>@DTANITA</div>
        <div className={styles.distance}>
          <img src="/images/arrow.png" />
          <p>0.1m</p>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.desktopContainer}>
      <div className={styles.desktopBackground}>
        <img src="/images/golden_queen.png" />
      </div>
      <div className={styles.pieceInfo}>
        <div className={styles.desktopPieceName}>THE GOLDEN QUEEN</div>
        <div className={styles.desktopArtist}>@DTANITA</div>
        <div className={styles.desktopDistance}>
          <img src="/images/arrow.png" />
          <p>0.1m</p>
        </div>
        <div className={styles.timer}>
          <img src="/images/liveHex.svg" />
          <p>20:30:20S</p>
        </div>
        <div className={styles.price}>0.002 ETH</div>
      </div>
    </div>
  );
};

export default MobileMini;
