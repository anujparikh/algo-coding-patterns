/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/
 * @param arr
 * @returns
 */
const squaringSortedArray = (arr: Array<number>): Array<number> => {
  let result = new Array(arr.length);
  let left = 0;
  let right = arr.length - 1;
  let pointer = result.length - 1;
  while (left <= right) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      result[pointer--] = arr[left] * arr[left];
      left++;
    } else {
      result[pointer--] = arr[right] * arr[right];
      right--;
    }
  }
  return result;
};
