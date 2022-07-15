# Sliding Window Pattern

- problems dealing with an array or LL and calculate something among all the subarrays (or sublists) of given size

## Examples

- Average of Subarrays: [Solution](/src/sliding-window/average-of-subarrays.ts) => [Problem Link](https://leetcode.com/problems/maximum-average-subarray-i/)
- Average of Subarrays: [Solution](/src/sliding-window/average-of-subarrays.ts) => [Problem Link](https://leetcode.com/problems/maximum-average-subarray-i/)
- Minimum Size Subarray Sum: [Solution](/src/sliding-window/smallest-subarray-sum.ts) => [Problem Link](https://leetcode.com/problems/minimum-size-subarray-sum/)
- Longest Substring with maximum K Distinct Characters: [Solution](/src/sliding-window/longest-substring-with-k-distinct-chars.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80)
- Fruits into baskets: [Solution](/src/sliding-window/fruit-baskets.ts) => [Problem Link](https://leetcode.com/problems/fruit-into-baskets/)
- Longest Substring Without Repeating Characters: [Solution](/src/sliding-window/longest-non-repeating-substring.ts) => [Problem Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- Longest Repeating Character Replacement: [Solution](/src/sliding-window/longest-repeating-substring-replacment.ts) => [Problem Link](https://leetcode.com/problems/longest-repeating-character-replacement/)
- Max Consecutive Ones III: [Solution](/src/sliding-window/longest-subarray-after-replacement.ts) => [Problem Link](https://leetcode.com/problems/max-consecutive-ones-iii/)
- Permutation in String: [Solution](/src/sliding-window/permutation-string.ts) => [Problem Link](https://leetcode.com/problems/permutation-in-string/)
- String Anagrams: [Solution](/src/sliding-window/string-anagram.ts) => [Problem Link](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
- Minimum Window Substring: [Solution](/src/sliding-window/smallest-window-substring.ts) => [Problem Link](https://leetcode.com/problems/minimum-window-substring/)
- Substring with Concatenation of All Words: [Solution](/src/sliding-window/words-concatenation.ts) => [Problem Link](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) (not fully solved)
- Best Time to Buy and Sell Stock: [Solution](/src/sliding-window/max-profit.ts) => [Problem Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

## Blind75 questions

- Best Time to Buy and Sell Stock: [Solution](/src/sliding-window/max-profit.ts) => [Problem Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- Longest Substring Without Repeating Characters: [Solution](/src/sliding-window/longest-non-repeating-substring.ts) => [Problem Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- Longest Repeating Character Replacement: [Solution](/src/sliding-window/longest-repeating-substring-replacment.ts) => [Problem Link](https://leetcode.com/problems/longest-repeating-character-replacement/)
- Permutation in String: [Solution](/src/sliding-window/permutation-string.ts) => [Problem Link](https://leetcode.com/problems/permutation-in-string/)
- Minimum Window Substring: [Solution](/src/sliding-window/smallest-window-substring.ts) => [Problem Link](https://leetcode.com/problems/minimum-window-substring/)

## Useful Snipets and tricks

- `windowEnd - windowStart + 1` is the size of window
- when working with strings
  - try to maintain a char map, which would update the occurences of particular alphabets
  - whenever the count of that alphabet is zero, delete the key from map
- when working with **Repeating character replacement**

  - we have to always get max repeating charater count in the current window

  ```js
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
  ```

- when working with pattern matching
  - use matched variable for comparison
  - the window size should be less than pattern length at the end in windowEnd loop
  - when remove variable from windowStart position, first check for `frequencyMap[startChar] === 0` condition for decrementing matched counter
