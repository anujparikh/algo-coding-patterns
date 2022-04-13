/**
 * Similar to https://leetcode.com/problems/3sum-closest/
 * @param arr
 * @param target
 * @returns
 */
const tripletClosestToTarget = (arr: Array<number>, target: number): number => {
  arr.sort((a, b) => a - b);
  let result = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentDiff = target - arr[i] - arr[left] - arr[right];
      if (
        Math.abs(result) > Math.abs(currentDiff) ||
        (Math.abs(currentDiff) === Math.abs(result) && currentDiff > result)
      ) {
        result = currentDiff;
      }
      if (currentDiff === 0) {
        return currentDiff;
      } else if (currentDiff < 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return target - result;
};
