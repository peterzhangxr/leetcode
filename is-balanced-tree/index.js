/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

  //方法一 暴力方法
  //自顶向下递归
  //问题高度计算冗余太多
  //nLog(n)
  /**
   * @param {TreeNode} root
   * @return {number}
  */

  /*
  var height = function(node) {
    if (node == null) {
      return -1
    }

    return 1 + Math.max(height(node.left), height(node.right))
  }

  if (root == null) {
    return true
  }

  return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right)
  */

  //方法二
  //从底至顶返回子树最大高度，若判定某子树不是平衡树则 “剪枝” ，直接向上返回。

  var isBalanced2 = function(node) {
    if (node == null) {
      return 0
    }

    let left = isBalanced2(node.left)
    if (left == -1) {
      return -1
    }

    let right = isBalanced2(node.right)
    if (right == -1) {
      return -1
    }

    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1
  }

  return isBalanced2(root) != -1



};