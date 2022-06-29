# Merge Intervals

- pattern describes an efficient technique to deal with overlapping intervals

## Examples
- Merge intervals for overlapping intervals: [Solution](/src/merge-intervals/merge-overlapping-intervals.ts) => [Problem Link](https://leetcode.com/problems/merge-intervals/)
- Insert intervals within sorted intervals: [Solution](/src/merge-intervals/insert-interval.ts) => [Problem Link]https://leetcode.com/problems/insert-interval/)

## Blind75 questions
- Merge intervals for overlapping intervals: [Solution](/src/merge-intervals/merge-overlapping-intervals.ts) => [Problem Link](https://leetcode.com/problems/merge-intervals/)
- Insert intervals within sorted intervals: [Solution](/src/merge-intervals/insert-interval.ts) => [Problem Link]https://leetcode.com/problems/insert-interval/)

## Useful Snipets and tricks
- while inserting an interval in sorted intervals list,
    - first skip all the intervals whose end time is less than new interval start time
    - merge the new interval within the result
    - perform merge intervals for rest of the intervals including the new interval which was added