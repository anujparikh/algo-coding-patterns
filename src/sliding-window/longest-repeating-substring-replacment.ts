const longestRepeatingSubstringAfterReplacement = (
  str: string,
  k: number
): number => {
  let max = -Infinity;
  let maxCharFrequency = 0;
  let windowStart = 0;
  let windowEnd = 0;
  let charMap = {};

  while (windowEnd < str.length) {
    let endChar = str[windowEnd];
    charMap[endChar] = (charMap[endChar] || 0) + 1;
    maxCharFrequency = Math.max(maxCharFrequency, charMap[endChar]);

    while (windowEnd - windowStart + 1 > maxCharFrequency + k) {
      const startChar = str[windowStart];
      charMap[startChar] = charMap[startChar] - 1;
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
    windowEnd++;
  }

  return max;
};
