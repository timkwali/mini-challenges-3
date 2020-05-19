function listSorting(needle, haystack) {
  let type = typeof [];
  for(let i = haystack.length-1; i >= 0; i--) {
    if(typeof haystack[i] === type) {
      //check for needle in arrays
      for(let j = haystack[i].length-1; j >= 0; j--) {
        if(haystack[i][j] === needle) {
          return [i, j];
        }
      }
    } else {
      //check for needle in elements
      if(haystack[i] === needle) {
        return i
      }
    }
  }
  return -1;
}

module.exports = listSorting;
