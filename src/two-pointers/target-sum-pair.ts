const targetSumPair = (arr: Array<number>, target: number): Array<number> => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [left, right];
    } else if (currentSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1, -1];
};
