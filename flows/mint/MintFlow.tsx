import React from "react";
import styles from "./MintFlow.module.css";

const MintFlow: React.FC = () => {
    return (
        <div>
            <div className={styles.ctaText}>
            <p className={styles.ctaTitle}>Success!</p>
            <p>Thank you for minting, poydo, eth.</p>
            <p>Now you can view your piece on:</p>
        </div>
        <div className={styles.modalContent}>
            <button className={styles.connect}> MIRAGE APP </button>
            <button className={styles.connect}> OPENSEA </button>
            <button className={styles.info}> ETHERSCAN </button>
        </div>
        </div>
    );
  };
  
  export default MintFlow;
