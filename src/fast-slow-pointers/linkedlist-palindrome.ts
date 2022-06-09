import { SinglyLLNode } from "../utils/Node";
import { linkedlistMidpoint } from "./linkedlist-midpoint";

const isLinkedListPalindrome = (head: SinglyLLNode): boolean => {
  const midpoint = linkedlistMidpoint(head);
  let reversedSecondHalf = reverseLinkedList(midpoint);
  while (head !== null && reversedSecondHalf !== null) {
    if (head.value !== reversedSecondHalf.value) {
      return false;
    }
    head = head.next;
    reversedSecondHalf = reversedSecondHalf.next;
  }
  return true;
};

const reverseLinkedList = (head: SinglyLLNode): SinglyLLNode => {
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
