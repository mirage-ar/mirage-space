import React from "react";
import styles from "./ConnectFlow.module.css";

const ConnectFlow: React.FC = () => {
  return <div className={styles.container}>
    <button className={styles.connect}>METAMASK</button>
    <button className={styles.connect}>WALLETCONNECT</button>
    <button className={styles.info}>GET A WALLET</button>
  </div>;
};

export default ConnectFlow;
