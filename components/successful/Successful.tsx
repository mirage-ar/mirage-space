import React from "react";
import Address from "../utils/Address";
import styles from "./Successful.module.css";

const Successful: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <img src="/images/check.svg" />
      </div>
      <p className={styles.connectText}>Connected as <Address /></p>
    </div>
  );
};

export default Successful;
