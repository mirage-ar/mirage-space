import React from "react";
import styles from "./Connected.module.css";
import Address from "../utilities/Address";

const Connected: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.connectedAs}>CONNECTED AS</p>
      <p className={styles.address}>
        <Address />
      </p>
      <img className={styles.stack} src="/images/stack.svg" />
    </div>
  );
};

export default Connected;
