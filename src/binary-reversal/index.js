/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {
  //convert value to integer
  value = parseInt(value);
  //convert integer to binary
  value = value.toString(2);

  //check for 8-bit padding
  let valueLength = value.length;
  if(valueLength < 8) {
    value = value.split("");
    for(let i = 0; i < 8 - valueLength; i++) {
      value.unshift("0");
    }
    value = value.join("");
  }

  //reverse binary number
  value = value.split("").reverse().join("");
  //convert reversed binary to decimal
  value = parseInt(value, 2)
  return value;
}

module.exports = binaryReversal;
