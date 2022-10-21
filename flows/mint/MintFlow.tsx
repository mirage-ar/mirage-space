/**----------------------------------------------------------------------------------
 * The Modal for Successful Mint
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import Address from "../../components/utils/Address";
import { useApplicationContext } from "../../state/context";
import styles from "./MintFlow.module.css";

const MintFlow: React.FC = () => {
  const { isMobileView, contract } = useApplicationContext();

  return (
    <div className={styles.container}>
      <div className={styles.ctaText}>
        <p className={styles.ctaTitle}>Success!</p>
        <p>
          Thank you for minting <Address />. Now you can
        </p>
        <p>view your piece on:</p>
      </div>
      <div className={styles.modalContent}>
        {isMobileView && (
          <a href="mirage://success" className={styles.connect}>
            MIRAGE APP
          </a>
        )}
        <a href={`https://testnets.opensea.io/assets/rinkeby/${contract}`} className={styles.info}> OPENSEA </a>
        <a href={`https://rinkeby.etherscan.io/address/${contract}`} className={styles.info}> ETHERSCAN </a>
      </div>
    </div>
  );
};

export default MintFlow;
