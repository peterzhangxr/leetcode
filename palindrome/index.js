/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  /*
  x = x.toString()
  const rev = x.split('').reverse().join('')
  if (rev === x) {
    return true
  }
  return false*/
  if (x < 0) {
    return false
  }
  const arr = []
  while(x > 0) {
    arr.push(x%10)
    x = parseInt(x/10)
  }

  if (arr.length == 1) {
    return true
  }

  let mid = Math.floor(arr.length/2)
  for (let i  = 0; i < mid; i++)  {
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false
    }
  }

  return true
};


console.log(isPalindrome(1212))