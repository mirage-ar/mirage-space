// Util functions

/**
 * Returns shortened Contract or Wallet address.
 *
 * @param {string} address - the address to be shortened
 * @return {string} - shortened address
 */
export const formatAddress = (address: string) => {
    const length = address.length;
    return `${address.substring(0, 4)}...${address.substring(
      length - 5,
      length - 1
    )}`.toUpperCase();
  };