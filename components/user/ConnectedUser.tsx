import React from "react";
import styles from "./ConnectedUser.module.css";

const ConnectedUser: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.connectedAs}>CONNECTED AS</p>
      <p className={styles.address}> 0X69...420T </p>
      <img className={styles.stack} alt="copy" src="/images/stack.svg" />
    </div>
  );
};

export default ConnectedUser;
