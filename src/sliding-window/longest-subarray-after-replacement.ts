const lengthOfLongestSubArrayOf1sAfterReplacement = (
  input: Array<number>,
  k: number
) => {
  let max = -Infinity;
  let windowStart = 0;
  let windowEnd = 0;
  let maxRepeating1 = 0;
  let frequencyMap = {};

  while (windowEnd < input.length) {
    let end = input[windowEnd];
    frequencyMap[end] = (frequencyMap[end] || 0) + 1;
    if (end === 1) {
      maxRepeating1 = Math.max(maxRepeating1, frequencyMap[end]);
    }
    if (windowEnd - windowStart + 1 > maxRepeating1 + k) {
      let start = input[windowStart];
      frequencyMap[start] = frequencyMap[start] - 1;
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
    windowEnd++;
  }

  return max === -Infinity ? 0 : max;
};
