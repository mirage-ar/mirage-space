import React from "react";
import styles from "./Connect.module.css";

import { ConnectButton } from "@rainbow-me/rainbowkit";

const Connect: React.FC = () => {
  return (
    <div className={styles.container}>
      <ConnectButton />
    </div>
  );
};

export default Connect;
