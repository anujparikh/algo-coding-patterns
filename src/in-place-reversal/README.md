# In-place Reversal of a LinkedList

## Examples

- Reverse a LinkedList: [Solution](/src/in-place-reversal/reverse-a-linkedlist.ts) => [Problem Link](https://leetcode.com/problems/reverse-linked-list/)

## Blind75 questions

- Reverse a LinkedList: [Solution](/src/in-place-reversal/reverse-a-linkedlist.ts) => [Problem Link](https://leetcode.com/problems/reverse-linked-list/)
- Reverse a Sub-LinkedList: [Solution](/src/in-place-reversal/reverse-sub-linkedlist.ts) => [Problem Link](https://leetcode.com/problems/reverse-linked-list-ii/)
- Reverse k sized sub linkedlist: [Solution](/src/in-place-reversal/reverse-k-sized-sub-list.ts) => [Problem Link](https://leetcode.com/problems/reverse-nodes-in-k-group/)

## Useful Snipets and tricks

- For reversing sub linkedlist
    - move the counter till start - 1
    - start reversing the linkedlist after that based on counter with all new `reverse*` values
    - once while loop is done, `previous.next = reversePrevious` and `current.next =  reverseCurrent`
    - return head itself
