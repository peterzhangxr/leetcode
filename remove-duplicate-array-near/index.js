/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
  let arr = S.split('')
  let temp = []
  for (let i = 0; i < arr.length; i++) {
    if (temp.length > 0 && temp[temp.length - 1] == arr[i]) {
      temp.pop()
    } else {
      temp.push(arr[i])
    }
  }

  return temp.join('')
  
};

console.log(removeDuplicates('abbaca'))