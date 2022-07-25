import React from "react";
import styles from"./Others.module.css"
import Mini from "../../components/piece_minis/mini";

const Others: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                VIEW OTHERS PIECES
            </div>
            <div className={styles.miniViews}>
                <Mini />
                <Mini />
                <Mini />
            </div>
        </div>
    )
}

export default Others;