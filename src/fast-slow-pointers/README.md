# Fast & Slow Pointers Pattern

- problems dealing with dealing with cyclic LinkedLists or arrays
- by moving at different speeds (say, in a cyclic LinkedList), the algorithm proves that the two pointers are bound to meet
- the fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

## Examples

- Has Cycle for singly Linkedlist: [Solution](/src/fast-slow-pointers/singly-ll-has-cycle.ts) => [Problem Link](https://leetcode.com/problems/linked-list-cycle/)
- Length of cycle in singly linkedlist: [Solution](/src/fast-slow-pointers/length-of-cycle.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D#Similar-Problems)
- Start of cycle in singly linkedlist: [Solution](/src/fast-slow-pointers/start-of-cycle-ll.ts) => [Problem Link](https://leetcode.com/problems/linked-list-cycle-ii/)
- Happy Number: [Solution](/src/fast-slow-pointers/happy-number.ts) => [Problem Link](https://leetcode.com/problems/happy-number/)
- Middle of Linkedlist: [Solution](/src/fast-slow-pointers/linkedlist-midpoint.ts) => [Problem Link](https://leetcode.com/problems/middle-of-the-linked-list/)
- Is Linkedlist palindrome: [Solution](/src/fast-slow-pointers/linkedlist-palindrome.ts) => [Problem Link](https://leetcode.com/problems/palindrome-linked-list/)
- Reorder linkedlist: [Solution](/src/fast-slow-pointers/rearrange-linkedlist.ts) => [Problem Link](https://leetcode.com/problems/reorder-list/)
- Circular Array Loop: [Solution](/src/fast-slow-pointers/is-circular-array.ts) => [Problem Link](https://leetcode.com/problems/circular-array-loop/)

## Useful Snipets and tricks

- whenever dealing with cycle
  - always check for fast pointer to be null in while loop
  - if fast pointer reaches null, it means there is not cycle
