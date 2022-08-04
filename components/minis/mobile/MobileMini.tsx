import React from "react";
import styles from "./MobileMini.module.css";

const MobileMini: React.FC = () => {
  return (
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
  );
};

export default MobileMini;
