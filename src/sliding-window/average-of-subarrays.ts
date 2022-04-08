const findAverageOfSubarrays = (
  input: Array<number>,
  k: number
): Array<number> => {
  const result: Array<number> = [];
  let windowStart = 0;
  let windowEnd = 0;
  let windowSum = 0;
  while (windowEnd < input.length) {
    windowSum += input[windowEnd];
    if (windowEnd - windowStart + 1 === k) {
      result.push(windowSum / k);
      windowSum -= input[windowStart];
      windowStart++;
    }
    windowEnd++;
  }
  return result;
};
