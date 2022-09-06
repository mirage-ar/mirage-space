/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./OtherItems.module.css";
import MiniView from "../../components/mini/MiniView";
import { useApplicationContext } from "../../state/context";

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
            item.token.contractAddress != contract
          ) {
            return <MiniView key={item.id} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default OtherItems;
