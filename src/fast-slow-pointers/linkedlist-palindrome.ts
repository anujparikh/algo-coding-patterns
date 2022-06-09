import { SinglyLLNode } from "../utils/Node";
import { linkedlistMidpoint } from "./linkedlist-midpoint";
import { reverseLinkedList } from "./reverse-linkedlist";

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
