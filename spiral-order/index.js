/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length <= 0) {
    return []
  }
  
  let res = []
  let l = 0;
  let t = 0;
  let r = matrix[0].length - 1
  let b = matrix.length - 1
  while(1) {

    //从左到右循环
    for (let i = l; i <= r; i++) {
      res.push(matrix[t][i])
    }
    if (++t > b) break

    //从上向下循环
    for (let i = t; i <= b; i++) {
      res.push(matrix[i][r])
    }
    if (l > --r) break

    //从右向左循环
    for (let i = r; i >= l; i--) {
      res.push(matrix[b][i])
    }
    if (t > --b) break

    //从下向上循环
    for (let i = b; i>=t; i--) {
      res.push(matrix[i][l])
    }
    if (++l > r) break

  }

  return res
};