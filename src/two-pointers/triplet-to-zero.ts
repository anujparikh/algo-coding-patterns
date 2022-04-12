/**
 * https://leetcode.com/problems/3sum/
 * @param arr
 * @returns
 */
function threeSum(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  const result: Array<Array<number>> = [];
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    findPair(arr.slice(i + 1), -1 * arr[i], result);
  }
  return result;
}

const findPair = (
  input: Array<number>,
  target: number,
  result: Array<Array<number>>
): void => {
  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    const currentSum = input[left] + input[right];
    if (currentSum === target) {
      result.push([-target, input[left], input[right]]);
      left++;
      right--;
      while (left < right && input[left - 1] === input[left]) {
        left++;
      }
      while (left < right && input[right + 1] === input[right]) {
        right--;
      }
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }
};
