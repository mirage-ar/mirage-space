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

export function dmsString(deg: number, lng: boolean): string {
  var d = parseInt(deg.toString());
  var minfloat = Math.abs((deg - d) * 60);
  var m = Math.floor(minfloat);
  var secfloat = (minfloat - m) * 60;
  var s = Math.round((secfloat + Number.EPSILON) * 100) / 100;
  d = Math.abs(d);

  if (s == 60) {
    m++;
    s = 0;
  }
  if (m == 60) {
    d++;
    m = 0;
  }

  let dms = {
    dir: deg < 0 ? (lng ? "W" : "S") : lng ? "E" : "N",
    deg: d,
    min: m,
    sec: s.toFixed(0),
  };
  return `${dms.deg}\u00B0${dms.min}'${dms.sec}"${dms.dir}`;
}