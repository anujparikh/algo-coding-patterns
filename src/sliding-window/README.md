# Sliding Window Pattern

- problems dealing with an array or LL and calculate something among all the subarrays (or sublists) of given size

## Examples

- Average of Subarrays: [Solution](/src/sliding-window/average-of-subarrays.ts) => [Problem Link](https://leetcode.com/problems/maximum-average-subarray-i/)
- Average of Subarrays: [Solution](/src/sliding-window/average-of-subarrays.ts) => [Problem Link](https://leetcode.com/problems/maximum-average-subarray-i/)
- Minimum Size Subarray Sum: [Solution](/src/sliding-window/smallest-subarray-sum.ts) => [Problem Link](https://leetcode.com/problems/minimum-size-subarray-sum/)
- Longest Substring with maximum K Distinct Characters: [Solution](/src/sliding-window/longest-substring-with-k-distinct-chars.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80)
- Fruits into baskets: [Solution](/src/sliding-window/fruit-baskets.ts) => [Problem Link](https://leetcode.com/problems/fruit-into-baskets/)
- Longest Substring Without Repeating Characters: [Solution](/src/sliding-window/longest-non-repeating-substring.ts) => [Problem Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Blind75 questions

- Longest Substring Without Repeating Characters: [Solution](/src/sliding-window/longest-non-repeating-substring.ts) => [Problem Link](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## Useful Snipets and tricks

- `windowEnd - windowStart + 1` is the size of window
- when working with strings
  - try to maintain a char map, which would update the occurences of particular alphabets
  - whenever the count of that alphabet is zero, delete the key from map
