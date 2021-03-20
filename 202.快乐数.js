/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
function getNext(x) {
  var z = 0;
  while (x) {
    z += (x % 10) * (x % 10);
    x = Math.floor(x / 10);
  }
  return z;
}
var isHappy = function (n) {
  var slow = getNext(n);
  var fast = getNext(getNext(n));

  while (slow !== fast && fast !== 1) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
};
// @lc code=end
