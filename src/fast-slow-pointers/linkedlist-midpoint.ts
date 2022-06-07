import { SinglyLLNode } from "../utils/Node";

const linkedlistMidpoint = (head: SinglyLLNode): SinglyLLNode => {
  if (head === null) return null;
  if (head.next === null) return head;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
