/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./OtherItems.module.css";
import MiniView from "../../components/mini/MiniView";
import { useApplicationContext } from "../../state/context";

const OtherItems: React.FC = () => {
  const { isMobileView, items } =
    useApplicationContext();

  return (
    <div className={styles[isMobileView ? "container" : "desktopContainer"]}>
      <div className={styles[isMobileView ? "title" : "desktopTitle"]}>
        VIEW OTHER PIECES
      </div>
      <div className={styles[isMobileView ? "miniViews" : "desktopMiniViews"]}>
        {items.map((item) => (
            <MiniView item={item} />
        ))}
      </div>
    </div>
  );
};

export default OtherItems;
