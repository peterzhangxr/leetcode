/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase(s)
  const check = i => {
    let code = s.charCodeAt(i)
    if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) {
      return true
    }

    return false
  }
  
  s = s.toLowerCase(s)
  let head = 0
  let tail = s.length - 1
  while(head < tail) {
    if (!check(head)) {
      head++
      continue
    }
    if (!check(tail)) {
      tail--
      continue
    }

    if (s.charAt(head) == s.charAt(tail)) {
      head++
      tail--
    } else {
      return false
    }
  }

  return true
  
};


let result = isPalindrome("race a car")
console.log(result)
