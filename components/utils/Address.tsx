import React from "react";
import { useAccount, useEnsName } from "wagmi";
import { formatAddress } from "../utils/functions";

const Address: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({
    address,
  });

  // if ENS exists show that
  if (ensName) {
    return (
      <>
        {ensName.length < 28 ? ensName.toUpperCase() : formatAddress(ensName)}
      </>
    );
  }

  // otherwise show formatted wallet address
  if (isConnected) {
    return <>{formatAddress(address)}</>;
  }

  return <>0X00...1111</>;
};

export default Address;
