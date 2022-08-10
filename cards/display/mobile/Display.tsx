import React from "react";
import { useApplicationContext } from "../../../state/context";
import { formatAddress } from "../../../components/utils/functions";
import Timer from "../../../components/utils/Timer";
import styles from "./Display.module.css";

const Display: React.FC = () => {
  const { items, contract, defaultItem } = useApplicationContext();

  const mirage =
    items.find((item) => item.token.contractAddress == contract) || defaultItem;

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
          <p>{mirage.name.toUpperCase()}</p>
          <p>BY @{mirage.artist.handle.toUpperCase()}</p>
        </div>
        <div className={styles.price}>
          <p className={styles.priceTitle}>PRICE</p>
          <p>0.002 ETH</p>
        </div>
        <div className={styles.timer}>
          <p className={styles.timerTitle}>
            TIMER <img src="/images/live.svg" />
          </p>
          <p>
            <Timer start={mirage.dropStart} end={mirage.dropEnd} />
          </p>
        </div>
        <div className={styles.address}>
          <p className={styles.addressTitle}>CONTRACT ADDRESS</p>
          <p className={styles.addressLink}>
            {formatAddress(mirage.token.contractAddress)}{" "}
            <img src="/images/navigate.svg" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;
