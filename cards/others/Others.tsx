import React from "react";
import styles from "./Others.module.css";
import MobileMini from "../../components/minis/mobile/MobileMini";
import DesktopMobile from "../../components/minis/desktop/desktopMini";

interface OthersProps {
  isMobileView?: boolean;
}

const Others: React.FC<OthersProps> = ({ isMobileView }) => {
  return (
    <>
      {isMobileView ? (
        <div className={styles.container}>
          <div className={styles.title}>VIEW OTHERS PIECES</div>
          <div className={styles.miniViews}>
            <MobileMini />
            <MobileMini />
            <MobileMini />
            <MobileMini />
            <MobileMini />
          </div>
        </div>
      ) : (
        <div className={styles.desktopContainer}>
          <div className={styles.desktopTitle}>VIEW OTHERS PIECES</div>
          <div className={styles.desktopMiniViews}>
            <DesktopMobile />
            <DesktopMobile />
            <DesktopMobile />
            <DesktopMobile />
            <DesktopMobile />
            <DesktopMobile />
            <DesktopMobile />
          </div>
        </div>
      )}
    </>
  );
};

export default Others;
