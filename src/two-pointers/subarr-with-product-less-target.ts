/**
 * https://leetcode.com/problems/subarray-product-less-than-k/
 * @param arr
 * @param target
 * @returns
 */
const findSubArrayProductLessThanTarget = (
  arr: Array<number>,
  target: number
): Array<Array<number>> => {
  const result: Array<Array<number>> = [];
  let left = 0;
  let product = 1;
  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];

    while (product >= target && left < arr.length) {
      product /= arr[left];
      left++;
    }

    const currentList = [];
    for (let i = right; i >= left; i--) {
      currentList.push(arr[i]);
      result.push([...currentList]);
    }
  }
  return result;
};
