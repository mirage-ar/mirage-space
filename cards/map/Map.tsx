import React from "react";
import styles from"./Map.module.css"

const Map: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.location}>
                <img src="/images/target.svg" />
                <p>NEW YORK CITY</p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.button}>
                    <div className={styles.content}>
                        00°00'00.0"N 00°00'00.0"E
                    </div>
                </div>
                <div className={styles.button}>
                    <div className={styles.content}>
                        <p>NAVIGATE</p>
                        <img src="/images/navigate.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;