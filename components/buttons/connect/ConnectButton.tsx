import React from "react";
import { useAccount } from "wagmi";
import { useApplicationContext } from "../../../state/context";
import styles from "./ConnectButton.module.css";
import Address from "../../utils/Address";

interface ConnectButtonProps {
  isLarge?: boolean;
}


const ConnectButton: React.FC<ConnectButtonProps> = ({ isLarge }) => {
  const { address, isConnected } = useAccount();
  const { toggleModal } = useApplicationContext();

  function copyAddress() {
    navigator.clipboard.writeText(address);
  }
  if (isLarge) {
    return (
      <div>
        {isConnected ? (
          <div className={styles.connectedContainer} onClick={toggleModal}>
            <div className={styles.connectedAs}>CONNECTED AS</div>
            <div className={styles.address}>
              <Address />
            </div>
          </div>
        ) : (
          <button className={styles.click} onClick={toggleModal}>
            CONNECT WALLET
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {isConnected ? (
          <div className={styles.connectedContainer} onClick={toggleModal}>
            <div className={styles.connectedAs}>CONNECTED AS</div>
            <div className={styles.address}>
              <Address />
            </div>
          </div>
        ) : (
          <button className={styles.clickSmall} onClick={toggleModal}>
            CONNECT WALLET
          </button>
        )}
      </div>
    );
  }
};

export default ConnectButton;
