# In-place Reversal of a LinkedList

## Examples

- Reverse a LinkedList: [Solution](/src/in-place-reversal/reverse-a-linkedlist.ts) => [Problem Link](https://leetcode.com/problems/reverse-linked-list/)

## Blind75 questions

- Reverse a LinkedList: [Solution](/src/in-place-reversal/reverse-a-linkedlist.ts) => [Problem Link](https://leetcode.com/problems/reverse-linked-list/)
- Reverse a Sub-LinkedList: [Solution](/src/in-place-reversal/reverse-sub-linkedlist.ts) => [Problem Link](https://leetcode.com/problems/reverse-linked-list-ii/)
- Reverse k sized sub linkedlist: [Solution](/src/in-place-reversal/reverse-k-sized-sub-list.ts) => [Problem Link](https://leetcode.com/problems/reverse-nodes-in-k-group/)
- Reverse k sized sub linkedlist alternately: [Solution](/src/in-place-reversal/reverse-alternate-K-sub-list.ts) => [Problem Link](https://www.geeksforgeeks.org/reverse-alternate-k-nodes-in-a-singly-linked-list/)
- Rotate Linkedlist: [Solution](/src/in-place-reversal/rotate-linkedlist.ts) => [Problem Link](https://leetcode.com/problems/rotate-list/)

## Useful Snipets and tricks

- For reversing sub linkedlist
    - move the counter till start - 1
    - store the value for last node of first part and last node of sub list which would be current
    ```
        let lastNodeOfFirstPart = previous;
        let lastNodeOfSubList = current;
    ```
    - reset the counter start reversing the linkedlist after that based on `counter < q - p + 1`
    - once while loop is done assign `lastNodeOfFirstPart.next` as `previous` and `lastNodeOfSubList.next` as `current`
    - return head itself
