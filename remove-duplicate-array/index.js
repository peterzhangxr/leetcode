/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 /* 
  let t = 0
  while(t < nums.length) {
    if (nums[t] == nums[t+1]) {
      nums.splice(t, 1)
    } else {
      t++
    }
  }

  return nums.length*/
  if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,5,6]))