import React from "react";
import styles from "./ConnectFlow.module.css";

const ConnectFlow: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.connect}>
        <p>METAMASK</p> <img src="/images/metamask.svg" />
      </button>
      <button className={styles.connect}><p>WALLETCONNECT</p> <img src="/images/walletconnect.png" /></button>
      <button className={styles.info}>GET A WALLET</button>
    </div>
  );
};

export default ConnectFlow;
