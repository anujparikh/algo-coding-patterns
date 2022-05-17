/**
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 * @param arr
 * @returns
 */
function findUnsortedSubarray(arr: number[]): number {
  let low = 0;
  let high = arr.length - 1;

  while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
    low++;
  }
  if (low === arr.length - 1) return 0;

  while (high > 0 && arr[high] >= arr[high - 1]) {
    high--;
  }

  let subArrMin = Infinity;
  let subArrMax = -Infinity;

  for (let i = low; i < high + 1; i++) {
    subArrMin = Math.min(arr[i], subArrMin);
    subArrMax = Math.max(arr[i], subArrMax);
  }

  // extend the subarray to include any number which is bigger than the minimum of the subarray
  while (low > 0 && arr[low - 1] > subArrMin) {
    low -= 1;
  }
  // extend the subarray to include any number which is smaller than the maximum of the subarray
  while (high < arr.length - 1 && arr[high + 1] < subArrMax) {
    high += 1;
  }

  return high - low + 1;
}
