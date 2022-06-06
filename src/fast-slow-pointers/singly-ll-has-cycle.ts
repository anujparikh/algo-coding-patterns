import { SinglyLLNode } from "../utils/Node";

const hasCycle = (head: SinglyLLNode): boolean => {
  let slow = head;
  let fast = head.next;
  while (slow.next !== null) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};
