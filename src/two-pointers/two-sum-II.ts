/**
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (target - numbers[left] === numbers[right]) {
      return [left + 1, right + 1];
    } else if (target - numbers[left] < numbers[right]) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
}
