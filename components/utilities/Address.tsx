import React from "react";

import { useAccount } from "wagmi";

const formatAddress = (address: string) => {
  const length = address.length;
  return `${address.substring(0, 4)}...${address.substring(
    length - 5,
    length - 1
  )}`.toUpperCase();
};

const Address: React.FC = () => {
  const { address, isConnected } = useAccount();

  return isConnected ? <p>{formatAddress(address)}</p> : <p>0X00...1111</p>;
};

export default Address;
