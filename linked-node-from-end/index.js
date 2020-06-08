/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let first = head
  let last = head
  
  for (let i = 0; i < k; i++) {
    first = first.next
  }
  while(first != null) {
    first = first.next
    last = last.next
  }

  return last
};


const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

console.log(getKthFromEnd(head, 2))