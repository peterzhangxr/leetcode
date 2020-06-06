/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  /*
  let a = {
    val: 0,
    next: null
  }
  let b = a
  b.val = 1
  b.next = {
    val: 2,
    next: null
  }
  console.log(a, b)

  b = b.next
  console.log(a, b)
  b.val = 3
  console.log(a, b) 
  return
  */
  //插入排序
  //双指针
  //如何移动指针
  //头节点
  let head = {
    val: 0,
    next: null
  }

  let current = head
  while(l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      current.next = l1
      l1 = l1.next
    } else {
      current.next = l2
      l2 = l2.next
    }

    //引入指向变了
    current = current.next
  }
  current.next = l1 != null ? l1 : l2;
  
  return head.next
};

const l1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
const l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}

mergeTwoLists(l1, l2)