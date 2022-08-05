import React from "react";
import { useConnect, useAccount } from "wagmi";
import styles from "./ConnectFlow.module.css";
import Loading from "../../components/loading/Loading";
import Successful from "../../components/successful/Successful";

const ConnectFlow: React.FC = () => {
  const { connect, connectors, error, isLoading } = useConnect();

  const { isConnected } = useAccount();

  return (
    <>
      {!isConnected ? (
        <div className={styles.container}>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {connectors.map((connector) => (
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
              ))}

              <button className={styles.info}>
                <p>GET A WALLET</p>
              </button>
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
