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

function reverse(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

/**
 * Returns shortened Contract or Wallet address.
 *
 * @param {string} address - the address to be shortened
 * @return {string} - shortened address
 */
export const userAccountHash = (wallet: string, nonce: number) => {
  //   var hash = SHA512.init()
  //   hash.update(data: Data(wallet.utf8))
  //   let finalize = hash.finalize()
  //   print(finalize.description)

  // !TODO: userAccountHash - update to use SHA512
  // for right now the hashing algo reverses the wallet and add the nonce to end

  return `${reverse(wallet)}${nonce}`;
};

// func userAccountHash(wallet: String, nonce: Int) -> String {
//   var hash = SHA512.init()
//   hash.update(data: Data(wallet.utf8))
//   let finalize = hash.finalize()
//   print(finalize.description)

//   // !TODO: userAccountHash - update to use SHA512
//   // for right now the hashing algo reverses the wallet and add the nonce to end
//   let reversed = String(wallet.reversed())
//   return "\(reversed)\(nonce)"
// }
