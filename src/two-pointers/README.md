# Two Pointers Pattern

- problems dealing with sorted arrays / linkedlists and need to find a set of elements that fullfill certain constraints
- set of elements could be a pair, a triplet or even a subarray

## Examples

- Pair with Target Sum: [Solution](/src/two-pointers/target-sum-pair.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/xog6q15W9GP)
- Remove Duplicates from Sorted Array: [Solution](/src/two-pointers/remove-duplicates.ts) => [Problem Link](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
- Squares of a Sorted Array: [Solution](/src/two-pointers/squaring-array.ts) => [Problem Link](https://leetcode.com/problems/squares-of-a-sorted-array/)
- 3 Sum: [Solution](/src/two-pointers/triplet-to-zero.ts) => [Problem Link](https://leetcode.com/problems/3sum/)
- 3 Sum Closest: [Solution](/src/two-pointers/triplet-closest-to-target.ts) => [Problem Link](https://leetcode.com/problems/3sum-closest/)
- Triplets with Smaller Sum: [Solution](/src/two-pointers/count-triplet-smaller-to-target.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/mElknO5OKBO)
- Subarrays with Product Less than a Target: [Solution](/src/two-pointers/subarr-with-product-less-target.ts) => [Problem Link](https://leetcode.com/problems/subarray-product-less-than-k/)
- Dutch National Flag Problem: [Solution](/src/two-pointers/dutch-flag-problem.ts) => [Problem Link](https://leetcode.com/problems/sort-colors/)
- 4 Sum: [Solution](/src/two-pointers/search-quadruplets.ts) => [Problem Link](https://leetcode.com/problems/4sum/)
- Backspace String Compare: [Solution](/src/two-pointers/backspace-string-compare.ts) => [Problem Link](https://leetcode.com/problems/backspace-string-compare/)
- Shortest Unsorted Continuous Subarray: [Solution](/src/two-pointers/shortest-unsorted-continuous-subarray.ts) => [Problem Link](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/)

## Blind75 questions

- 3 Sum: [Solution](/src/two-pointers/triplet-to-zero.ts) => [Problem Link](https://leetcode.com/problems/3sum/)
- Valid Palindrome: [Solution](/src/two-pointers/valid-palindrome.ts) => [Problem Link](https://leetcode.com/problems/valid-palindrome/)

## Useful Snipets and tricks

- whenever dealing with triplet
  - start with for loop range from 0 to length - 2
  - while loop within the parent for with left and right pointers
  - left should be i + 1 and right should be length - 1
  - compare to the target within while loop
- whenever dealing with shortest unsorted continious array
  - first find the lowest starting index which is out of order
  - next find the highest index which is out of order
  - find min and max from the subarray
  - compare both min and max on left and right side of subarray respectively
