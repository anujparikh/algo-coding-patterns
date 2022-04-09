const smallestWindowSubstring = (str: string, pattern: string) => {
  let result = str;
  let windowStart = 0;
  let frequencyMap = {};
  let matched = 0;
  let found = false;

  for (let i = 0; i < pattern.length; i++) {
    const currentChar = pattern[i];
    frequencyMap[currentChar] = (frequencyMap[currentChar] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str[windowEnd];
    if (endChar in frequencyMap) {
      frequencyMap[endChar] = frequencyMap[endChar] - 1;
      if (frequencyMap[endChar] === 0) {
        matched++;
      }
    }

    while (matched === Object.keys(frequencyMap).length) {
      found = true;
      if (result.length > windowEnd - windowStart + 1) {
        result = str.substring(windowStart, windowEnd + 1);
      }
      const startChar = str[windowStart];
      if (startChar in frequencyMap) {
        if (frequencyMap[startChar] === 0) {
          matched--;
        }
        frequencyMap[startChar] = frequencyMap[startChar] + 1;
      }
      windowStart++;
    }
  }
  return found ? result : "";
};
