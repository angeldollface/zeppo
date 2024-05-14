/*
ZEPPO by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

// Converts a base 16 number to a base 10 number.
export function hexToDec(hexNumber: string): string {
  const base: number = 16;
  let result: number = 0;
  const digitSetString: string = '0123456789ABCDEF';
  const digitSet: Array<string> = digitSetString.split('');
  const hexCharsBase: Array<string> = hexNumber.split('');
  const hexChars: Array<string> = hexCharsBase.reverse();
  for (let i: number = 0; i < hexChars.length; i++) {
    const hexChar: string = hexChars[i];
    if (digitSet.includes(hexChar) === true) {
      const posMul: number = digitSet.indexOf(hexChar);
      const posPower: number = Math.pow(base, i);
      const posProduct: number = posMul * posPower;
      result = result + posProduct;
    } 
    else {
      throw 'Illegal character found!';
    }
  }
  return result.toString();
}

// Exporting the "hexToDec"
// function.
export default hexToDec;
