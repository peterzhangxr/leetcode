/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  //遍历数组
  /*
  let temp = {}
  for (let i = 0; i < nums.length;i++) {
    if (temp[nums[i]] != undefined) {
      return nums[i]
    } 
    temp[nums[i]] = i
  }*/
  
  let tempSet = new Set()
  for (let item of nums) {
    let currentSize = tempSet.size
    tempSet.add(item)
    if (currentSize == tempSet.size) {
      return item
    }
  }

};


console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))