import React from "react";
import { useAccount, useDisconnect } from "wagmi";
import Address from "../utils/Address";
import styles from "./Successful.module.css";

const Successful: React.FC = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <img src="/images/check.svg" />
      </div>
      <p className={styles.connectText}>
        Connected as <Address /> |{" "}
        {isConnected && <a style={{cursor: "pointer"}} onClick={() => disconnect()}>Disconnect</a>}
      </p>
    </div>
  );
};

export default Successful;
