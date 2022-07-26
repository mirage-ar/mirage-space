/**----------------------------------------------------------------------------------
 * The Modal Content For Connecting a Wallet
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

import React, { useState, useEffect } from "react";
import { useConnect, useAccount } from "wagmi";
import styles from "./ConnectFlow.module.css";
import Loading from "../../components/loading/Loading";
import Successful from "../../components/successful/Successful";
import { useApplicationContext } from "../../state/context";

const ConnectFlow: React.FC = () => {
  const { connect, connectors, error, isLoading } = useConnect();
  const { isMobileView } = useApplicationContext();

  const { isConnected } = useAccount();

  return (
    <>
      {!isConnected ? (
        <div className={styles.container}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {connectors.map((connector) => {
                if (isMobileView && connector.name === "MetaMask") return;
                return (
                  <button
                    className={styles.connect}
                    disabled={!connector.ready}
                    key={connector.id}
                    onClick={() => connect({ connector })}
                  >
                    <p>{connector.name.toUpperCase()}</p>{" "}
                    {connector.name === "MetaMask" ? (
                      <img src="/images/metamask.svg" />
                    ) : (
                      <img src="/images/walletconnect.png" />
                    )}
                    {!connector.ready}
                  </button>
                );
              })}
              <a
                href="https://rainbow.me"
                target="_blank"
                rel="noreferrer"
              >
                <button className={styles.info}>
                  <p>GET A WALLET</p>
                </button>
              </a>
            </>
          )}
          {error && <div className={styles.errorMessage}>{error.message}</div>}
        </div>
      ) : (
        <div>
          <Successful />
        </div>
      )}
    </>
  );
};

export default ConnectFlow;
