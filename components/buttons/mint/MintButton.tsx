import React, { useEffect } from "react";
import { useApplicationContext } from "../../../context/state";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import styles from "./MintButton.module.css";
import { CONTRACT } from "./contract";

const MintButton: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { toggleModal, setTransactionHash } = useApplicationContext();

  const { config } = usePrepareContractWrite({
    addressOrName: "0x707053274D1f443f62AAaD6FE28b82e7CB1D370e",
    contractInterface: CONTRACT.abi,
    functionName: "safeMint",
    args: [address],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  // useEffect(() => {
  //   setTransactionHash(data?.hash);
  // }, [data?.hash, setTransactionHash]);

  console.log(`Loading: ${isLoading}`);
  console.log(`Success: ${isSuccess}`);

  if (isLoading) {
    return <div>Loading Comp...</div>;
  }

  if (isSuccess) {
    toggleModal();
  }

  return (
    <div>
      {isConnected ? (
        <button
          className={styles.click}
          disabled={!write}
          onClick={() => write?.()}
        >
          MINT
        </button>
      ) : (
        <button className={styles.click} onClick={toggleModal}>
          CONNECT WALLET
        </button>
      )}
    </div>
  );
};

export default MintButton;
