import React from "react";
import { useConnect } from "wagmi";
import styles from "./ConnectFlow.module.css";
import Loading from "../../components/loading/Loading";

const ConnectFlow: React.FC = () => {
  const { connect, connectors, error, isLoading } =
    useConnect();

  return (
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
              <p>{connector.name}</p>{" "}
              {connector.name === "MetaMask" ? (
                <img src="/images/metamask.svg" />
              ) : (
                <img src="/images/walletconnect.png" />
              )}
              {!connector.ready && " (unsupported)"}
            </button>
          ))}

          <button className={styles.info}>
            <p>GET A WALLET</p>
          </button>
        </>
      )}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default ConnectFlow;
