/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  const check = (head, tail) => {
    while(head < tail) {
      if (s.charAt(head) == s.charAt(tail)) {
        head++
        tail--
      } else {
        return false
      }      
    }

    return true
  }

  let head = 0
  let tail = s.length - 1
  while(head < tail) {
    if (s.charAt(head) == s.charAt(tail)) {
      head++
      tail--
    } else {
      if (check(head + 1, tail) || check(head, tail - 1)) {
        return true
      }

      return false
    }      
  }
  return true
  
};

console.log(validPalindrome('abac'))