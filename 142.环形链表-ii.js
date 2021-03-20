/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = (fast = head);
  do {
    slow = slow.next;
    fast = fast.next.next;
  } while (fast && fast.next && slow != fast);
  if (fast === null || fast.next === null) return null;
  console.log(slow === fast, slow.val);
  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};
// @lc code=end
