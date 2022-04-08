const maxSumSubarrayOfSizeK = (input: Array<number>, k: number): number => {
  let max = -Infinity;
  let windowStart = 0;
  let windowEnd = 0;
  let windowSum = 0;
  while (windowEnd < input.length) {
    windowSum += input[windowEnd];
    if (windowEnd - windowStart + 1 === k) {
      max = Math.max(max, windowSum);
      windowSum -= input[windowStart];
      windowStart++;
    }
    windowEnd++;
  }
  return max;
};
