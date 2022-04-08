const longestSubStringWithKDistinctChars = (
  input: string,
  k: number
): number => {
  let longestStart = 0;
  let longestEnd = 0;
  const charMap = {};
  let windowStart = 0;
  let windowEnd = 0;
  while (windowEnd < input.length) {
    charMap[input[windowEnd]] = (charMap[input[windowEnd]] || 0) + 1;
    while (Object.keys(charMap).length > k) {
      charMap[input[windowStart]] = charMap[input[windowStart]] - 1;
      if (charMap[input[windowStart]] === 0) {
        delete charMap[input[windowStart]];
      }
      windowStart++;
    }
    if (longestEnd - longestStart + 1 < windowEnd - windowStart + 1) {
      longestEnd = windowEnd;
      longestStart = windowStart;
    }
    windowEnd++;
  }
  return longestEnd - longestStart + 1;
};
