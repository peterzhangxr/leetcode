/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const rommans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const arr = s.split('')
  let num = 0
  for (let [i, n] of arr.entries()) {
    if (n == 'I' && (arr[i+1] == 'V' || arr[i+1] == 'X')) {
      num -= rommans[n]
    }
    else if (n == 'X' && (arr[i+1] == 'L' || arr[i+1] == 'C')) {
      num -= rommans[n]
    }
    else if (n == 'C' && (arr[i+1] == 'D' || arr[i+1] == 'M')) {
      num -= rommans[n]
    } else {
      num += rommans[n]
    }
  }

  return num
};

console.log(romanToInt('LVIII'))