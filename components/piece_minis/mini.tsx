import React from "react";
import styles from "./mini.module.css"

const Mini: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src="/images/mini_background.png" />
            <div>
                <div className={styles.pieceName}>
                    THE GOLDEN QU...
                </div>
                <div className={styles.artist}>
                    @DTANITA
                </div>
                <div className={styles.distance}>
                    <img src="/images/arrow.png" />
                    <p>0.1m</p>
                </div>
            </div>
        </div>
    )
}

export default Mini;