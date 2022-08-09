import React from "react";
import { useAccount } from "wagmi";
import { useApplicationContext } from "../../../state/context";
import styles from "./ConnectButton.module.css";
import Address from "../../utils/Address";

const ConnectButton: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { toggleModal } = useApplicationContext();

  function copyAddress() {
    navigator.clipboard.writeText(address)
  }

  return (
    <div>
      {isConnected ? (
        <button className={styles.connectedContainer} onClick={toggleModal}>
          <div className={styles.connectedAs}>CONNECTED AS</div>
          <p className={styles.address}>
            <Address />
          </p>
          <img className={styles.stack} src="/images/stack.svg" onClick={copyAddress}/>
        </button>
      ) : (
        <button className={styles.click} onClick={toggleModal}>
          CONNECT WALLET
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
