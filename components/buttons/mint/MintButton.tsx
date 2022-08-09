import React, { useEffect, useState } from "react";
import { useApplicationContext } from "../../../state/context";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import styles from "./MintButton.module.css";
import { CONTRACT } from "./contract";

const MintButton: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const { address, isConnected } = useAccount();
  const { isModalOpen, toggleModal, transactionHash, setTransactionHash } =
    useApplicationContext();

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

  useEffect(() => {
    // set transaction hash state
    if (data?.hash !== transactionHash) {
      setTransactionHash(data?.hash);
    }

    if (isSuccess && !isModalOpen && !openModal) {
      setOpenModal(true);
      toggleModal();
    }
  }, [
    data?.hash,
    transactionHash,
    setTransactionHash,
    isSuccess,
    toggleModal,
    isModalOpen,
    openModal,
    setOpenModal,
  ]);

  if (isLoading) {
    return <div className={styles.loading}><img src={"/images/spinner.gif"}/></div>;
  }

  if (isSuccess) {
    return <button className={styles.success} onClick={toggleModal}><img src="/images/check.svg"/></button>;
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
