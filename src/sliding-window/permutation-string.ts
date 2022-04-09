const findStringPermutation = (str: string, pattern: string): boolean => {
  let windowStart = 0;
  let strMap = {};
  let matched = 0;

  for (let i = 0; i < pattern.length; i++) {
    let current = pattern[i];
    strMap[current] = (strMap[current] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const endChar = str[windowEnd];
    if (endChar in strMap) {
      strMap[endChar] = strMap[endChar] - 1;
      if (strMap[endChar] === 0) {
        matched++;
      }
    }

    if (matched === Object.keys(strMap).length) {
      return true;
    }

    if (windowEnd - windowStart + 1 >= pattern.length) {
      const startChar = str[windowStart];
      windowStart++;
      if (startChar in strMap) {
        if (strMap[startChar] === 0) {
          matched--;
        }
        strMap[startChar] = strMap[startChar] + 1;
      }
    }
  }
  return false;
};
