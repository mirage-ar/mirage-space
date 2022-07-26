/**----------------------------------------------------------------------------------
 * Conditionally rendering button for Mint flow
 * Mirage (( v1.0 ))
 * @author max <max@mirage.space> | October 21, 2022 | Updated:
 * ----------------------------------------------------------------------------------*/

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
    contract,
  } = useApplicationContext();

  const { config } = usePrepareContractWrite({
    addressOrName: contract,
    contractInterface: CONTRACT.abi,
    functionName: "safeMint",
    args: [address],
  });

  const { data, write } = useContractWrite(config);

  const { isLoading, isSuccess, isError } = useWaitForTransaction({
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
      // updateCache();
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

  // if wallet connected + user has claimed mirage -> show mint button
  const hasClaimedMirage = items.find((item): boolean => {
    if (item.user && item.token) {
      return (
        item.token?.tokenId === null &&
        item.token?.contractAddress.toUpperCase() === contract?.toUpperCase() &&
        item.user?.wallet.toUpperCase() === address?.toUpperCase()
      );
    }
    return false;
  });

  const hasMinted = items.find((item): boolean => {
    if (item.user && item.token) {
      return (
        item.token?.tokenId !== null &&
        item.token?.contractAddress.toUpperCase() === contract?.toUpperCase() &&
        item.user?.wallet.toUpperCase() === address?.toUpperCase()
      );
    }
    return false;
  });

  if (!contract) {
    return (
      <div className={styles.mintContainer}>
        <div className={styles.cta}>Please visit a contract page to mint</div>{" "}
        <button className={styles.click} onClick={toggleModal} disabled={true}>
          Mint
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <img src={"/images/spinner.gif"} />
      </div>
    );
  }

  if (isSuccess || hasMinted) {
    return (
      <button className={styles.success} onClick={toggleModal}>
        <img src="/images/check.svg" />
      </button>
    );
  }

  if (hasClaimedMirage) {
    return (
      <div className={styles.mintContainer}>
        { isError && <div className={styles.ctaFail}>There was a transaction error, please try again.</div>}
        <button
          className={styles.click}
          disabled={!write}
          onClick={() => write?.()}
        >
          MINT
        </button>
      </div>
    );
  }

  if (isConnected) {
    return (
      <>
        <div className={styles.mintContainer}>
          <div className={styles.cta}>SOLD OUT</div>
          <button className={styles.noClick}>MINT</button>
        </div>
      </>
    );
  }

  return (
    <div className={styles.mintContainer}>
      <div className={styles.cta}>SOLD OUT</div>
      <button className={styles.click} onClick={toggleModal}>
        CONNECT WALLET
      </button>
    </div>
  );
};

export default MintButton;
