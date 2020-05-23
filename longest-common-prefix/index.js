/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) {
    return '';
  }
  //拆解二维数组
  let map = strs[0].split('')
  for (let i = 1; i < strs.length; i++) {
    let temp = strs[i].split('')
    map = map.slice(0, temp.length)
    for (let j = 0; j < temp.length; j++) {
      if (map[j] != temp[j]) {
        map = map.slice(0, j)
        break
      }
    } 
  }
  return map.join('')
};


console.log(longestCommonPrefix(["flower","flow","flight"]))