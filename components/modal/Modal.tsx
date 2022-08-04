import React from "react";
import styles from "./Modal.module.css";
import Address from "../utilities/Address";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const outsideRef = React.useRef(null);

  const handleCloseOnOverlay = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  return isOpen ? (
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
  ) : null;
};

export default Modal;
