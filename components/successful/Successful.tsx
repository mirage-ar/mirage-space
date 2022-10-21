/**----------------------------------------------------------------------------------
 * The Modal Content That Shows on Successful Connection of Wallet 
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useApplicationContext } from "../../state/context";
import Address from "../utils/Address";
import styles from "./Successful.module.css";

const Successful: React.FC = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { toggleModal } = useApplicationContext();

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggleModal}>
        <img src="/images/check.svg" />
      </button>
      <div className={styles.connectText}>
        Connected as <Address /> |{" "}
        {isConnected && <a style={{cursor: "pointer"}} onClick={() => disconnect()}>Disconnect</a>}
      </div>
    </div>
  );
};

export default Successful;
