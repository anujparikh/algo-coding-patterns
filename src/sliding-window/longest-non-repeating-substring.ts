const longestNonRepeatingSubstring = (str: string): number => {
  let longestSubStringLength = -Infinity;
  let windowStart = 0;
  let windowEnd = 0;
  let charMap = {};
  while (windowEnd < str.length) {
    const endChar = str[windowEnd];
    while (charMap[endChar] && charMap[endChar] !== 0) {
      const startChar = str[windowStart];
      charMap[startChar] = charMap[startChar] - 1;
      windowStart++;
    }
    charMap[endChar] = (charMap[endChar] || 0) + 1;
    longestSubStringLength = Math.max(
      longestSubStringLength,
      windowEnd - windowStart + 1
    );
    windowEnd++;
  }
  return longestSubStringLength === -Infinity ? 0 : longestSubStringLength;
};
