// Util functions

/**
 * Returns shortened Contract or Wallet address.
 *
 * @param {string} address - the address to be shortened
 * @return {string} - shortened address
 */
export const formatAddress = (address: string | null) => {
  if (address === null) return;

  const length = address.length;
  return `${address.substring(0, 5)}...${address.substring(
    length - 4,
    length
  )}`.toUpperCase();
};

/**
 * Checks case-insensitive equality for contract and wallet addresses
 *
 * @param {string} addressOne - address to be checked
 * @param {string} addressTwo - address to be checked
 * @return {bool} - result
 */
export const isSameAddress = (
  addressOne: string | null,
  addressTwo: string | null
): boolean => {
  if (!addressOne || !addressTwo) return false;

  return addressOne.toUpperCase() === addressTwo?.toUpperCase();
};
