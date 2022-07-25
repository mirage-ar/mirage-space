import React from "react";
import styles from "./Display.module.css"


const Display: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topHalf}>
                <div className={styles.piece}>
                    <img src="/images/golden_queen.png"/>
                </div>
                <div className={styles.drop}>
                    <p>DROP</p>
                    <img src="/images/drop.svg" />
                </div>
            </div>
            <div className={styles.bottomHalf}>
                <div className={styles.name}>
                    <p>THE GOLDEN QUEEN</p>
                    <p>BY @DTANITA</p>
                </div>
                <div className={styles.price}>
                    <p className={styles.priceTitle}>PRICE</p>
                    <p>0.002 ETH</p>
                </div>
                <div className={styles.timer}>
                    <p className={styles.timerTitle}>TIMER <img src="/images/live.svg"/></p>
                    <p>20:30:20s</p>
                </div>
                <div className={styles.address}>
                    <p className={styles.addressTitle}>CONTRACT ADDRESS</p>
                    <p className={styles.addressLink}>0x69...420 <img src="/images/navigate.svg" /> </p>
                </div>
            </div>
        </div>
    )
}

export default Display;