/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  //第一种解法
  /*
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        return true
      }
    }
  }

  return false
  */

  if (matrix && matrix.length > 0 && matrix[0].length > 0) {

    let row = 0;
    let col = matrix[row].length - 1;
    while(true) {
      let temp = matrix[row][col]
      if ( temp == target) {
        return true
      } else if (temp > target) {
        --col
        if (col < 0) {
          return false
        }
      } else if (temp < target) {
        ++row
        if (row >= matrix.length) {
          return false
        }
      }
    }
  } else {
    return false
  }
  
};



var matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

console.log(findNumberIn2DArray(matrix, 8))