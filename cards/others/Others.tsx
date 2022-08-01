import React from "react";
import styles from "./Others.module.css";
import Mini from "../../components/piece_minis/mini";

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
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
          </div>
        </div>
      ) : (
        <div className={styles.desktopContainer}>
          <div className={styles.desktopTitle}>VIEW OTHERS PIECES</div>
          <div className={styles.desktopMiniViews}>
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
            <Mini isMobileView={isMobileView} />
            
          </div>
        </div>
      )}
    </>
  );
};

export default Others;
