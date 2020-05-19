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
  //reverse binary number
  value = value.split("").reverse().join("");
  //convert reversed binary to decimal

  console.log(value);
}

binaryReversal("121")

//module.exports = binaryReversal;
