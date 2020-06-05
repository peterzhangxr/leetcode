/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = {}
  for (let i = 0; i < s.length;i++) {
    let char = s.charAt(i)
    if (!map[char]) {
      map[char] = 0
    }

    map[char] += 1
  }

  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i)
    if (map[char] && map[char] == 1) {
      return char
    }
  }

  return " "
};


console.log(firstUniqChar('leetcode'))