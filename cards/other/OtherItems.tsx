import React from "react";
import styles from "./OtherItems.module.css";
import MiniView from "../../components/mini/MiniView";
import { useApplicationContext } from "../../context/state";

const OtherItems: React.FC = () => {
  const { isMobileView } = useApplicationContext();

  return (
    <div className={styles[isMobileView ? "container" : "desktopContainer"]}>
      <div className={styles[isMobileView ? "title" : "desktopTitle"]}>
        VIEW OTHER PIECES
      </div>
      <div
        className={
          styles[isMobileView ? "miniViews" : "desktopMiniViews"]
        }
      >
        <MiniView />
        <MiniView />
        <MiniView />
        <MiniView />
        <MiniView />
      </div>
    </div>
  );
};

export default OtherItems;
