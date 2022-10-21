/**----------------------------------------------------------------------------------
 * The Display card for the contract page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import { useApplicationContext } from "../../state/context";
import { formatAddress, isSameAddress } from "../../components/utils/functions";
import Timer from "../../components/utils/Timer";
import styles from "./Display.module.css";
import Mapbox from "../mapbox/Mapbox";
import Description from "../description/Description";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(
  () => import("../../components/model/ModelViewer"),
  { ssr: false }
);

const Display: React.FC = () => {
  const { items, contract, defaultItem, isMobileView } =
    useApplicationContext();

  const mirage =
    items.find((item) => isSameAddress(item.token.contractAddress, contract)) ||
    defaultItem;

  return (
    <>
      {isMobileView ? (
        <div className={styles.container}>
          <div className={styles.topHalf}>
            <div className={styles.piece}>
              <ModelViewer assetUri={mirage.assetUri} />
            </div>
            <div className={styles.drop}>
              <p>DROP</p>
              <img src="/images/0000.svg" />
            </div>
          </div>
          <div className={styles.bottomHalf}>
            <div className={styles.name}>
              <p className={styles.nameTitle}>{mirage.name.toUpperCase()}</p>
              <p>BY {mirage.artist.handle.toUpperCase()}</p>
            </div>
            <div className={styles.price}>
              <p className={styles.priceTitle}>PRICE</p>
              <p>{mirage.token.mintPrice} ETH</p>
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
                {formatAddress(contract)} <img src="/images/navigate.svg" />
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.desktopContainer}>
          <div className={styles.desktopLeftContent}>
            <img
              src="./images/pieceInfo.svg"
              className={styles.desktopDisplayTitle}
            />
            <div className={styles.desktopInfo}>
              <p className={styles.desktopLeftText}>PIECE NAME</p>
              <p>{mirage.name.toUpperCase()}</p>
            </div>
            <div className={styles.desktopInfo}>
              <p className={styles.desktopLeftText}>ARTIST</p>
              <p>{mirage.artist.handle.toUpperCase()}</p>
            </div>
            <div className={styles.desktopInfo}>
              <p className={styles.desktopLeftText}>PRICE</p>
              <p>{mirage.token.mintPrice} ETH</p>
            </div>
            <div className={styles.desktopInfo}>
              <p className={styles.desktopLeftText}>TIMER</p>
              {/* TODO: Desktop timer needs to be made to work */}
              <Timer start={mirage.dropStart} end={mirage.dropEnd} />
            </div>
            <div className={styles.desktopInfo}>
              <p className={styles.desktopLeftText}>CONTRACT ADDRESS</p>
              <p>{formatAddress(contract)}</p>
            </div>
            <Mapbox />
            <Description />
          </div>
          <div className={styles.desktopRightContent}>
            <div className={styles.desktopPiece}>
              <ModelViewer assetUri={mirage.assetUri} />
            </div>
            <div className={styles.desktopPieceInfo}>
              <p>DROP</p>
              <img src="/images/0000.svg" className={styles.desktopDropImage} />
              {/* <img src="/images/360.svg" className={styles.desktopRotation} /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
