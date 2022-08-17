import React from "react";
import { useApplicationContext } from "../../state/context";
import { formatAddress } from "../../components/utils/functions";
import Timer from "../../components/utils/Timer";
import styles from "./Display.module.css";
import Mapbox from "../mapbox/Mapbox";
import Description from "../description/Description";
import Address from "../../components/utils/Address";

const Display: React.FC = () => {
  const { items, contract, defaultItem, isMobileView } =
    useApplicationContext();

  const mirage =
    items.find((item) => item.token.contractAddress == contract) || defaultItem;

  return (
    <>
      {isMobileView ? (
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
                {formatAddress(mirage.token.contractAddress)}{" "}
                <img src="/images/navigate.svg" />
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
              <p>@{mirage.artist.handle.toUpperCase()}</p>
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
              <Address />
            </div>
            <Mapbox />
            <Description />
          </div>
          <div className={styles.desktopRightContent}>
            <div className={styles.desktopPiece}>
              <img
                src="/images/golden_queen.png"
                className={styles.desktopPiecePlacement}
              />
            </div>
            <div className={styles.desktopPieceInfo}>
              <p>DROP</p>
              <img src="/images/drop.svg" className={styles.desktopDropImage} />
              {/* TODO: decide if piece needs to rotate or not
              <img src="/images/360.svg" className={styles.desktopRotation} /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
