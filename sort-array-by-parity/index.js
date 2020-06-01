/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {

  let arr = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i]%2 == 0) {
      arr.unshift(A[i])
    } else {
      arr.push(A[i])
    }

  }

  return arr
};