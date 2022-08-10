// Util functions

/**
 * Returns shortened Contract or Wallet address.
 *
 * @param {string} address - the address to be shortened
 * @return {string} - shortened address
 */
export const formatAddress = (address: string) => {
  const length = address.length;
  return `${address.substring(0, 5)}...${address.substring(
    length - 4,
    length
  )}`.toUpperCase();
};
