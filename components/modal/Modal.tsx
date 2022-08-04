import React from "react";
import { useAccount } from "wagmi";
import styles from "./Modal.module.css";
import Address from "../utilities/Address";
import ConnectFlow from "../../flows/connect/connectFLow";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const outsideRef = React.useRef(null);
  const { isConnected } = useAccount();

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <>
      {isConnected ? (
        <div className={styles.container}>
          <div
            ref={outsideRef}
            className={styles.modalOverlay}
            onClick={handleCloseOnOverlay}
          />
          <div className={styles.modalBox}>
            <div className={styles.modalTopbar}>
              <div className={styles.modalTitle}>MINT</div>
              <div className={styles.connected}>
                <img src="/images/live.svg" />
                <p>
                  CONNECTED AS <Address />
                </p>
                <button className={styles.modalClose} onClick={onClose}>
                  <img src={"/images/close.svg"} alt={"close modal"} />
                </button>
              </div>
            </div>
            <div className={styles.ctaText}>
              <p className={styles.ctaTitle}>Success!</p>
              <p>Thank you for minting, poydo, eth.</p>
              <p>Now you can view your piece on:</p>
            </div>
            <div className={styles.modalContent}>
              <button className={styles.connect}> MIRAGE APP </button>
              <button className={styles.connect}> OPENSEA </button>
              <button className={styles.info}> ETHERSCAN </button>
            </div>
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
