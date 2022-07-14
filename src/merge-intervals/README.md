# Merge Intervals

- pattern describes an efficient technique to deal with overlapping intervals

## Examples
- Merge intervals for overlapping intervals: [Solution](/src/merge-intervals/merge-overlapping-intervals.ts) => [Problem Link](https://leetcode.com/problems/merge-intervals/)
- Insert intervals within sorted intervals: [Solution](/src/merge-intervals/insert-interval.ts) => [Problem Link](https://leetcode.com/problems/insert-interval/)
- Interval List Intersections: [Solution](/src/merge-intervals/intervals-intersection.ts) => [Problem Link](https://leetcode.com/problems/interval-list-intersections/)
- Conflicting appointments: [Solution](/src/merge-intervals/conflicting-appointments.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/qVV79nGVgAG)
- Minimum Meeting rooms: [Solution](/src/merge-intervals/minimum-meeting-rooms.ts) => [Problem Link](https://leetcode.com/problems/meeting-rooms-ii/)
- Maximum CPU load: [Solution](/src/merge-intervals/max-cpu-load.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/xVlyyv3rR93)
- Employee Free Times: [Solution](/src/merge-intervals/employee-free-time.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/YQykDmBnvB0)

## Blind75 questions
- Merge intervals for overlapping intervals: [Solution](/src/merge-intervals/merge-overlapping-intervals.ts) => [Problem Link](https://leetcode.com/problems/merge-intervals/)
- Insert intervals within sorted intervals: [Solution](/src/merge-intervals/insert-interval.ts) => [Problem Link](https://leetcode.com/problems/insert-interval/)
- Meeting rooms II: [Solution](/src/merge-intervals/minimum-meeting-rooms.ts) => [Problem Link](https://leetcode.com/problems/meeting-rooms-ii/)
- Non-overlapping Intervals: [Solution](/src/merge-intervals/non-overlapping-intervals.ts) => [Problem Link](https://leetcode.com/problems/non-overlapping-intervals/)
- Meeting room: [Solution](/src/merge-intervals/meeting-rooms.ts) => [Problem Link](https://www.lintcode.com/problem/920/)
- Minimum Interval to Include Each Query: [Solution](/src/merge-intervals/min-interval-query.ts) => [Problem Link](https://leetcode.com/problems/minimum-interval-to-include-each-query/)

## Useful Snipets and tricks
- while inserting an interval in sorted intervals list,
    - first skip all the intervals whose end time is less than new interval start time
    - merge the new interval within the result
    - perform merge intervals for rest of the intervals including the new interval which was added
- Non overlapping intervals
    - make sure after incrementing the result (removal counter) the previous counter should be set to minimum ends of previous or current.
