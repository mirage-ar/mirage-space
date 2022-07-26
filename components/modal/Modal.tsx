import React from "react";
import styles from "./Modal.module.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const outsideRef = React.useRef(null);

    const handleCloseOnOverlay = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.target === outsideRef.current) {
          onClose();
        }
      }

    return isOpen ? (
        <div className={styles.container}>
                <div 
                    ref={outsideRef}
                    className={styles.modalOverlay}
                    onClick={handleCloseOnOverlay}
                />
                <div className={styles.modalBox}>
                    <div className={styles.modalTopbar}>
                        <div className={styles.modalTitle}>
                            CONNECT WALLET
                        </div>
                        <button 
                            className={styles.modalClose}
                            onClick={onClose}
                        >
                            <img src={"/images/close.svg"} alt={"close modal"} />
                        </button>
                    </div>
                    <div className={styles.modalContent}>
                        <button className={styles.connect}> METAMASK  <img src="/images/metamask.svg" className={styles.connectIcon}/></button>
                        <button className={styles.connect}> WALLETCONNECT <img src="/images/walletconnect.png" className={styles.connectIcon}/></button>
                        <button className={styles.info}> WHAT'S A WALLET </button>
                    </div>
                </div>
            </div>
    ) : null
}

export default Modal;