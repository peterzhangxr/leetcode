/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteLinkedListNode = function(head, val) {
  let pre = new ListNode(0)
    pre.next = head
    let node = pre
    while(node.next) {
        if (node.next.val == val) {
            node.next = node.next.next
            break;
        }

        node = node.next
    }

    return pre.next;

};
