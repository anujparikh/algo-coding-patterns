const wordsConcatenation = (str: string, words: Array<string>) => {
  const result: Array<number> = [];
  const frequencyMap = {};
  let windowStart = 0;
  let windowEnd = 0;
  let matched = 0;

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    frequencyMap[currentWord] = (frequencyMap[currentWord] || 0) + 1;
  }

  while (windowEnd < str.length) {
    const endWord = str.substring(windowEnd, windowEnd + words[0].length);
    if (endWord in frequencyMap) {
      frequencyMap[endWord] = frequencyMap[endWord] - 1;
      if (frequencyMap[endWord] === 0) {
        matched++;
      }
    }

    while (matched === Object.keys(frequencyMap).length) {
      if (
        windowEnd - windowStart + words[0].length ===
        words.length * words[0].length
      ) {
        result.push(windowStart);
      }

      const startWord = str.substring(
        windowStart,
        windowStart + words[0].length
      );

      if (startWord in frequencyMap) {
        if (frequencyMap[startWord] === 0) {
          matched--;
        }
        frequencyMap[startWord] = frequencyMap[startWord] + 1;
      }
      windowStart += words[0].length;
    }
    windowEnd += words[0].length;
  }
  return result;
};
