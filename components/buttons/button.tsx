import React from "react";
import styles from "./button.module.css"

const Button: React.FC = () => {
    return (
        <div className={styles.container}>
            <button className={styles.click}>
                <p>
                    CONNECT WALLET
                </p>
            </button>
        </div>
    )
}

export default Button