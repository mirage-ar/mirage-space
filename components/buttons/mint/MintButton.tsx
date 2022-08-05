import React from "react";
import { useAccount } from "wagmi";
import { useApplicationContext } from "../../../context/state";
import styles from "./MintButton.module.css";


// TODO: Move to util folder
const formatAddress = (address: string) => {
  const length = address.length;
  return `${address.substring(0, 4)}...${address.substring(
    length - 5,
    length - 1
  )}`.toUpperCase();
};


const ConnectButton: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { toggleModal } = useApplicationContext();
  const mint = () => {
    console.log("minted!")
  }

  return (
    <div>
      {isConnected ? (
        <button className={styles.click} onClick={mint}>
        MINT
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
