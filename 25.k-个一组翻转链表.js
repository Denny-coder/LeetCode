/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function _reverse(head, n) {
  if (n === 1) return head;
  var tail = head.next;
  var p = _reverse(head.next, n - 1);
  head.next = tail.next;
  tail.next = head;
  return p;
}
function reverse(head, n) {
  var p = head;
  var cut = n;
  while (--cut && p) p = p.next;
  if (p === null) return head;
  return _reverse(head, n);
}
var reverseKGroup = function (head, k) {
  var ret = new ListNode(0, head);
  var p = ret;
  var q = p.next;
  while ((p.next = reverse(q, k)) !== q) {
    p = q;
    q = p.next;
  }
  return ret.next;
};
// @lc code=end
