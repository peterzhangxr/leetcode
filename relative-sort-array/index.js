/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let k = 0
  for (let i = 0; i < arr2.length; i++) {
    for (j = k; j < arr1.length; j++) {
      if (arr1[j] == arr2[i]) {
        let temp = arr1[j]
        arr1[j] = arr1[k]
        arr1[k++] = temp
      }
    }
  }

  while(k < arr1.length) {
    let t = k
    for(let i = k; i < arr1.length; i++) {
      if (arr1[i] < arr1[t]) {
        t = i
      }
    }

    let temp = arr1[t]
    arr1[t] = arr1[k]
    arr1[k] = temp
    ++k
  }
  
  return arr1
};
//冒泡排序

console.log(relativeSortArray([31,2,3,1,3,2,4,6,9, 9, 10, 22, 7,9,2,19], [2,1,4,3,9,6]))