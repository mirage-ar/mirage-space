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
  const {
    isModalOpen,
    toggleModal,
    transactionHash,
    setTransactionHash,
    items,
  } = useApplicationContext();

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
    return (
      <div className={styles.loading}>
        <img src={"/images/spinner.gif"} />
      </div>
    );
  }

  if (isSuccess) {
    return (
      <button className={styles.success} onClick={toggleModal}>
        <img src="/images/check.svg" />
      </button>
    );
  }

  // if wallet connected + user has claimed mirage -> show mint button
  const hasClaimedMirage = items.find((item) => {
    return (
      item.token?.tokenId === null &&
      item.user?.wallet.toUpperCase() === address?.toUpperCase()
    );
  });

  if (hasClaimedMirage) {
    return (
      <button
        className={styles.click}
        disabled={!write}
        onClick={() => write?.()}
      >
        MINT
      </button>
    );
  }

  if (isConnected) {
    return (
      <>
        <div> Claim Mirage to mint...</div>
        <button className={styles.click} disabled={true}>
          MINT
        </button>
      </>
    );
  }

  return (
    <button className={styles.click} onClick={toggleModal}>
      CONNECT WALLET
    </button>
  );
};

export default MintButton;
