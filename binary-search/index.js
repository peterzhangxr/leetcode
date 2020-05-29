/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length < 1) {
    return -1
  }
  
  let min = 0;
  let max = nums.length - 1;
  while(min <= max) {
    let idx = min + Math.floor((max - min)/2)
    if(nums[idx] == target) {
      return idx;
    } else if (nums[idx] > target) {
      max = idx - 1
    } else if (nums[idx] < target) {
      min = idx + 1
    }
  }

  return -1
};

console.log(search([-1,0,3,5,9,12], 13))