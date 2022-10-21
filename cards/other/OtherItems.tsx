/**----------------------------------------------------------------------------------
 * A card for viewing other pieces from a contract page
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./OtherItems.module.css";
import MiniView from "../../components/mini/MiniView";
import { useApplicationContext } from "../../state/context";
import { isSameAddress } from "../../components/utils/functions";

const OtherItems: React.FC = () => {
  const { isMobileView, items, contract } = useApplicationContext();

  return (
    <div className={styles[isMobileView ? "container" : "desktopContainer"]}>
      <div className={styles[isMobileView ? "title" : "desktopTitle"]}>
        VIEW OTHER PIECES
      </div>
      <div className={styles[isMobileView ? "miniViews" : "desktopMiniViews"]}>
        {items.map((item) => {
          // only return original pieces
          if (
            item.token?.tokenId == "0" &&
            !isSameAddress(item.token.contractAddress, contract)
          ) {
            return <MiniView key={item.id} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default OtherItems;
