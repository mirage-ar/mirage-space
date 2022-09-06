import React from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useApplicationContext } from "../../state/context";
import Address from "../utils/Address";
import styles from "./Successful.module.css";

const Successful: React.FC = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { toggleModal } = useApplicationContext();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleModal}>
        <img src="/images/check.svg" />
      </button>
      <p className={styles.connectText}>
        Connected as <Address /> |{" "}
        {isConnected && <a style={{cursor: "pointer"}} onClick={() => disconnect()}>Disconnect</a>}
      </p>
    </div>
  );
};

export default Successful;
