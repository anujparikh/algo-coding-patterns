# Fast & Slow Pointers Pattern

- problems dealing with dealing with cyclic LinkedLists or arrays
- by moving at different speeds (say, in a cyclic LinkedList), the algorithm proves that the two pointers are bound to meet
- the fast pointer should catch the slow pointer once both the pointers are in a cyclic loop.

## Examples

- Has Cycle for singly Linkedlist: [Solution](/src/fast-slow-pointers/singly-ll-has-cycle.ts) => [Problem Link](https://leetcode.com/problems/linked-list-cycle/)
- Length of cycle in singly linkedlist: [Solution](/src/fast-slow-pointers/length-of-cycle.ts) => [Problem Link](https://www.educative.io/courses/grokking-the-coding-interview/N7rwVyAZl6D#Similar-Problems)

## Useful Snipets and tricks

- whenever dealing with cycle
  - always check for fast pointer to be null in while loop
  - if fast pointer reaches null, it means there is not cycle
