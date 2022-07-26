/**----------------------------------------------------------------------------------
 * The Main Modal for wallet connecting and minting
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import { useWaitForTransaction, useAccount, useDisconnect } from "wagmi";
import ConnectFlow from "../../flows/connect/ConnectFlow";
import MintFlow from "../../flows/mint/MintFlow";
import { useApplicationContext } from "../../state/context";
import Address from "../utils/Address";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const outsideRef = React.useRef(null);
  const { transactionHash } = useApplicationContext();
  const { isSuccess } = useWaitForTransaction({
    hash: transactionHash,
  });
  const { isMobileView } = useApplicationContext();

  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <>
      {isSuccess ? (
        <div className={styles.container}>
          ``
          <div
            ref={outsideRef}
            className={styles.modalOverlay}
            onClick={handleCloseOnOverlay}
          />
          <div className={styles[isMobileView ? "mobileModalBox" : "modalBox"]}>
            <div
              className={
                styles[isMobileView ? "mobileModalTopbar" : "modalTopbar"]
              }
            >
              <div className={styles.modalTitle}>MINT</div>
              <div className={styles.connected}>
                <img src={"/images/live.svg"} />
                <div>
                  CONNECTED AS <Address /> | {isConnected && <a style={{cursor: "pointer"}} onClick={() => disconnect()}>Disconnect</a>}
                </div>
                <button className={styles.modalClose} onClick={onClose}>
                  <img src={"/images/close.svg"} alt={"close modal"} />
                </button>
              </div>
            </div>
            <MintFlow />
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.container}>
            <div
              ref={outsideRef}
              className={styles.modalOverlay}
              onClick={handleCloseOnOverlay}
            />
            <div
              className={styles[isMobileView ? "mobileModalBox" : "modalBox"]}
            >
              <div
                className={
                  styles[isMobileView ? "mobileModalTopbar" : "modalTopbar"]
                }
              >
                <div className={styles.modalTitle}>CONNECT WALLET</div>
                <div className={styles.connected}>
                  <button className={styles.modalClose} onClick={onClose}>
                    <img src={"/images/close.svg"} alt={"close modal"} />
                  </button>
                </div>
              </div>
              <ConnectFlow />
            </div>
          </div>
        </div>
      )}
    </>
  ) : null;
};

export default Modal;
