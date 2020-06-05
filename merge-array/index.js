/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  for (let i = 0 ; i < n; i++) {
    A[m + i] = B[i]
  }
  A.sort(function(a, b) {
      return a - b
  })
};


console.log(merge)