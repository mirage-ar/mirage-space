/**----------------------------------------------------------------------------------
 * A Side Scrolling Viewer for Models
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import { useApplicationContext } from "../../state/context";
import { Mirage } from "../../state/types";
import styles from "./MiniView.module.css";
import Timer from "../utils/Timer";
import { useRouter } from "next/router";

interface MiniProps {
  item: Mirage;
}

const MobileMini: React.FC<MiniProps> = ({ item }) => {
  const router = useRouter();
  const { isMobileView, contract } = useApplicationContext();

  const navigateToItem = (item: Mirage) => {
    router.replace(`/${contract}`, `/${item.token.contractAddress}`);
  };

  return (
    <div className={styles[isMobileView ? "container" : "desktopContainer"]} onClick={() => navigateToItem(item)}>
      <div className={styles[isMobileView ? "background" : "desktopBackground"]} >
        <img src={`assets/images/${item.assetUri}.png`} />
      </div>
      <div className={styles.pieceInfo}>
        <div className={styles[isMobileView ? "pieceName" : "desktopPieceName"]} >
          {item.name.toUpperCase()}
        </div>
        <div className={styles[isMobileView ? "artist" : "desktopArtist"]}>
          @ {item.artist.handle.toUpperCase()}
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
        {!isMobileView && <div className={styles.price}>{item.token.mintPrice} ETH</div>}
      </div>
    </div>
  );
};

export default MobileMini;
