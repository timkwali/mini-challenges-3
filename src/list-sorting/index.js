function listSorting(needle, haystack) {
  let containArray = false;
  let output;
  //check if haystack contains arrays
  for(let i = 0; i < haystack.length; i++) {
    if(typeof haystack[i] === Object) {
      console.log(haystack[i]);
      containArray = true;
      break;
    }
  }
  console.log(containArray)
  //check if needle is in haystack
    //look for needle in non-array haystack
    if(containArray === false) {
      output = haystack.lastIndexOf(needle);
      return output;
    }

    //look for needle in array haystack
    if(containArray === true) {
      for(let j = haystack.length; i >= 0; j--) {
        console.log(haystack[j]);
      }
    }
}

listSorting(4, [3, 4, [3, 4, 5], 3, 2, 4, 7]);

//module.exports = listSorting;
