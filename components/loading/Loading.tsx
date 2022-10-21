/**----------------------------------------------------------------------------------
 * Loading Icon for Mint process
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import styles from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <img src="/images/spinner.gif" />
      </div>
      <p className={styles.connectText}>Check your wallet application</p>
    </div>
  );
};

export default Loading;
