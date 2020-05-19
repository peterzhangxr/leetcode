/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  //利用数组对战平台的解法
  let numberArr = x.toString().split('').reverse()
  if (numberArr[numberArr.length - 1] == '-') {
    numberArr.unshift('-')
  }

  Math.pow(2,)

  let number = parseInt(numberArr.join(''))
  if (number > 2147483647 || number < -2147483648) {
    return 0
  }

  
  return number
};


console.log(reverse(-2147483647))

