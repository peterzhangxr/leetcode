/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num
    if (map[diff] != undefined) {
      return [map[diff], i]
    }

    map[nums[i]] = i;
  }

  return []

};

const result = twoSum([5, 2, 4, 8, 9], 13)
console.log(result)