/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseList = function (head, n) {
  if (!head || !head.next || n === 1) {
    return head;
  }
  var tail = head.next;
  var result = reverseList(head.next, n - 1);
  head.next = tail.next;
  tail.next = head;
  return result;
};

var reverseBetween = function (head, left, right) {
  var ret = new ListNode(0, head);
  var p = ret;
  var count = right - left + 1;
  while (--left) p = p.next;
  p.next = reverseList(p.next, count);
  return ret.next;
};
// @lc code=end
