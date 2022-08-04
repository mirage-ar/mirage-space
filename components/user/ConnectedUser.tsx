import React from "react";
import Address from "../utilities/Address";
import styles from "./ConnectedUser.module.css";

const ConnectedUser: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.connectedAs}>CONNECTED AS</p>
      <p className={styles.address}><Address /></p>
      <img className={styles.stack} alt="copy" src="/images/stack.svg" />
    </div>
  );
};

export default ConnectedUser;
