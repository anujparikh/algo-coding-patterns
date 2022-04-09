const findStringAnagrams = (str: string, pattern: string): Array<number> => {
  const result: Array<number> = [];
  const frequencyMap = {};
  let windowStart = 0;
  let matched = 0;

  for (let i = 0; i < pattern.length; i++) {
    const currentChar = pattern[i];
    frequencyMap[currentChar] = (frequencyMap[currentChar] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let endChar = str[windowEnd];
    if (endChar in frequencyMap) {
      frequencyMap[endChar] = frequencyMap[endChar] - 1;
      if (frequencyMap[endChar] === 0) {
        matched++;
      }
    }

    if (matched === Object.keys(frequencyMap).length) {
      result.push(windowStart);
    }

    if (windowEnd + 1 >= pattern.length) {
      let startChar = str[windowStart];
      if (startChar in frequencyMap) {
        if (frequencyMap[startChar] === 0) {
          matched--;
        }
        frequencyMap[startChar] = frequencyMap[startChar] + 1;
      }
      windowStart++;
    }
  }

  return result;
};
