/**----------------------------------------------------------------------------------
 * A Vertical Scrolling Accordian fold for viewing models
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import { useApplicationContext } from "../../state/context";
import { Mirage } from "../../state/types";
import styles from "./IndexMiniView.module.css";
import Timer from "../utils/Timer";
import { useRouter } from "next/router";
import { dmsString } from "../utils/functions"
import { isSameAddress } from "../../components/utils/functions";

interface MiniProps {
  item: Mirage;
}

const IndexMiniView: React.FC<MiniProps> = ({ item }) => {
  const router = useRouter();
  const { contract, items, defaultItem } = useApplicationContext();
  const mirage =
    items.find((item) => isSameAddress(item.token.contractAddress, contract)) ||
    defaultItem;

  const navigateToItem = (item: Mirage) => {
    router.replace(`/${contract}`, `/${item.token.contractAddress}`);
  };

  return (
    <div className={styles.container} onClick={() => navigateToItem(item)}>
      <div className={styles.piece}>
        <img src={`assets/images/${item.assetUri}.png`} />
      </div>
      <div className={styles.nameTitlePrice}>
        <div className={styles.name}>{item.name.toUpperCase()}</div>
        <div className={styles.title}>@ {item.artist.handle.toUpperCase()}</div>
        <div className={styles.price}>{item.token.mintPrice} ETH</div>
      </div>
      <div className={styles.locationTimer}>
        <div className={styles.location}>
          <img src="/images/greenNav.png" /> BROOKLYN
            {/* <p>
              {dmsString(mirage.latitude, false)}{" "}
              {dmsString(mirage.longitude, true)}
            </p> */}
        </div>
        <div className={styles.timer}>
          <img src="/images/liveHex.svg" />{" "}
          <Timer start={item.dropStart} end={item.dropEnd} />
        </div>
      </div>
    </div>
  );
};

export default IndexMiniView;
