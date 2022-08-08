import React from "react";
import { useAccount, useWaitForTransaction } from "wagmi";
import styles from "./Modal.module.css";
import Address from "../utilities/Address";
import ConnectFlow from "../../flows/connect/ConnectFlow";
import MintFlow from "../../flows/mint/MintFlow";
import Successful from "../successful/Successful";
import { useApplicationContext } from "../../context/state";

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
          <div
            ref={outsideRef}
            className={styles.modalOverlay}
            onClick={handleCloseOnOverlay}
          />
          <div className={styles.modalBox}>
            <div className={styles.modalTopbar}>
              <div className={styles.modalTitle}>CONNECT WALLET</div>
              <div className={styles.connected}>
                <button className={styles.modalClose} onClick={onClose}>
                  <img src={"/images/close.svg"} alt={"close modal"} />
                </button>
              </div>
            </div>
            Mint
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
            <div className={styles.modalBox}>
              <div className={styles.modalTopbar}>
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
