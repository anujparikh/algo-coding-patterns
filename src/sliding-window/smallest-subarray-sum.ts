const smallestSubArraySum = (input: Array<number>, k: number): number => {
  let min = Infinity;
  let windowStart = 0;
  let windowEnd = 0;
  let windowSum = 0;
  while (windowEnd < input.length) {
    windowSum += input[windowEnd];
    while (windowSum >= k) {
      if (min > windowEnd - windowStart + 1) {
        min = windowEnd - windowStart + 1;
      }
      windowSum -= input[windowStart];
      windowStart++;
    }
    windowEnd++;
  }
  return min === Infinity ? 0 : min;
};
