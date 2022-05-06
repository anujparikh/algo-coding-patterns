/**
 * https://leetcode.com/problems/4sum/
 * @param arr
 * @param target
 * @returns
 */
const searchQuadruplets = (
  arr: Array<number>,
  target: number
): Array<Array<number>> => {
  arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < arr.length - 3; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) {
        continue;
      }
      searchPair(arr, target, result, i, j);
    }
  }
  return result;
};

const searchPair = (
  arr: Array<number>,
  target: number,
  result: Array<Array<number>>,
  first: number,
  second: number
): void => {
  let left = second + 1;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[first] + arr[second] + arr[left] + arr[right];
    if (currentSum === target) {
      result.push([arr[first], arr[second], arr[left], arr[right]]);
      left++;
      right--;
      while (arr[left] === arr[left - 1] && left < right) {
        left++;
      }
      while (arr[right] === arr[right + 1] && left < right) {
        right--;
      }
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }
};
