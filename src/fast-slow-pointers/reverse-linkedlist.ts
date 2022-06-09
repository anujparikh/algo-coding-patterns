import { SinglyLLNode } from "../utils/Node";

export const reverseLinkedList = (head: SinglyLLNode): SinglyLLNode => {
  if (head === null || head.next === null) return head;
  let previous = null;
  let current = head;
  let next = null;
  while (current !== null) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};
