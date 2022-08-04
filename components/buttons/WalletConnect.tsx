import React from "react";
import { useAccount } from "wagmi";
import styles from "./WalletConnect.module.css";

const formatAddress = (address: string) => {
  const length = address.length;
  return `${address.substring(0, 4)}...${address.substring(
    length - 5,
    length - 1
  )}`.toUpperCase();
};

interface WalletConnectProps {
  toggleModal: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ toggleModal }) => {
  const { address, isConnected } = useAccount();

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
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
