import React from "react";
import styles from"./Description.module.css"

const Description: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <p>DESCRIPTION</p>
            </div>
            <div className={styles.artistStatement}>
                <p>
                    This is an optional few sentences from the artist describing their work, its location, the significance and why they chose this location, etc
                </p>
            </div>
            <div className={styles.cta}>
                Connect Wallet to mint
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button}>
                    CONNECT WALLET
                </button>
            </div>
        </div>
    )
}

export default Description;