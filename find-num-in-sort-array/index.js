/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  //其他解法  二分查找
  let min = 0
  let max = nums.length - 1
  let k = -1
  while(min <= max) {
    let idx = min + Math.floor((max - min)/2)
    if (nums[idx] > target) {
      max = idx - 1
    } else if (nums[idx] < target) {
      min = idx + 1
    } else if (nums[idx] == target) {
      k = idx
      break;
    }
  }
  if (k == -1) {
    return 0
  }
  let n = 0
  for (let i = k; i < nums.length; i++) {
    if (nums[i] == target) {
      n++
    } else {
      break
    }
  } 
  for (let i = k - 1; i >= 0; i--) {
    if (nums[i] == target) {
      n++
    } else {
      break
    } 
  }

  return n
};


console.log(search([5,7,7,8,8,10], 9))