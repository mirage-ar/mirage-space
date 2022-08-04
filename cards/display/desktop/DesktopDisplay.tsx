import React from "react";
import styles from "./DesktopDisplay.module.css";

import Map from "../../map/Map";
import Description from "../../description/Description";

const DesktopDisplay: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <img src="./images/pieceInfo.svg" className={styles.displayTitle} />
        <div className={styles.info}>
          <p className={styles.leftText}>PIECE NAME</p>
          <p>THE GOLDEN QUEEN</p>
        </div>
        <div className={styles.info}>
          <p className={styles.leftText}>ARTIST</p>
          <p>@DTANITA</p>
        </div>
        <div className={styles.info}>
          <p className={styles.leftText}>PRICE</p>
          <p>0.002 ETH</p>
        </div>
        <div className={styles.info}>
          <p className={styles.leftText}>TIMER</p>
          <p>20:30:20s</p>
        </div>
        <div className={styles.info}>
          <p className={styles.leftText}>CONTRACT ADDRESS</p>
          <p>0X69...420</p>
        </div>
        <Map />
        <Description />
      </div>
      <div className={styles.rightContent}>
        <div className={styles.piece}>
          <img
            src="/images/golden_queen.png"
            className={styles.piecePlacement}
          />
        </div>
        <div className={styles.pieceInfo}>
          <p>DROP</p>
          <img src="/images/drop.svg" className={styles.dropImage} />
          <img src="/images/360.svg" className={styles.rotation} />
        </div>
      </div>
    </div>
  );
};

export default DesktopDisplay;
