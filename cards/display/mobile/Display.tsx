import React from "react";
import { formatAddress } from "../../../components/utils/functions"
import { useApplicationContext } from "../../../state/context";
import styles from "./Display.module.css";

const Display: React.FC = () => {
  const { items } = useApplicationContext();

  return (
    <div className={styles.container}>
      <div className={styles.topHalf}>
        <div className={styles.piece}>
          <img src="/images/golden_queen.png" />
        </div>
        <div className={styles.drop}>
          <p>DROP</p>
          <img src="/images/drop.svg" />
        </div>
      </div>
      <div className={styles.bottomHalf}>
        <div className={styles.name}>
          <p>THE GOLDEN QUEEN</p>
          <p>BY @{items[0]?.artist.handle.toUpperCase()}</p>
        </div>
        <div className={styles.price}>
          <p className={styles.priceTitle}>PRICE</p>
          <p>0.002 ETH</p>
        </div>
        <div className={styles.timer}>
          <p className={styles.timerTitle}>
            TIMER <img src="/images/live.svg" />
          </p>
          <p>20:30:20s</p>
        </div>
        <div className={styles.address}>
          <p className={styles.addressTitle}>CONTRACT ADDRESS</p>
          <p className={styles.addressLink}>
            {formatAddress(items[0]?.token?.contractAddress || "0x697053274D1f443f62AAaD6FE28b82e7CB1420X")} <img src="/images/navigate.svg" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;
