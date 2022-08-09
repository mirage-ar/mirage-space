import React from "react";
import { useAccount } from "wagmi";
import { formatAddress } from "../../utils/functions"
import { useApplicationContext } from "../../../state/context";
import styles from "./ConnectButton.module.css";

const ConnectButton: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { toggleModal } = useApplicationContext();

  return (
    <div>
      {isConnected ? (
        <div className={styles.connectedContainer}>
          <p className={styles.connectedAs}>CONNECTED AS</p>
          <p className={styles.address}>{formatAddress(address)}</p>
          <img className={styles.stack} src="/images/stack.svg" />
        </div>
      ) : (
        <button className={styles.click} onClick={toggleModal}>
          CONNECT WALLET
        </button>
      )}
    </div>
  );
};

export default ConnectButton;
