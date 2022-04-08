const fruitsIntoBaskets = (fruits: Array<string>): number => {
  let max = -Infinity;
  const charMap = {};
  let windowStart = 0;
  let windowEnd = 0;
  while (windowEnd < fruits.length) {
    charMap[fruits[windowEnd]] = (charMap[fruits[windowEnd]] || 0) + 1;
    while (Object.keys(charMap).length > 2) {
      charMap[fruits[windowStart]] = charMap[fruits[windowStart]] - 1;
      if (charMap[fruits[windowStart]] === 0) {
        delete charMap[fruits[windowStart]];
      }
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
    windowEnd++;
  }
  return max;
};
