import { SinglyLLNode } from "../utils/Node";
import { linkedlistMidpoint } from "./linkedlist-midpoint";
import { reverseLinkedList } from "./reverse-linkedlist";

const rearrangeLinkedlist = (head: SinglyLLNode): SinglyLLNode => {
  let midpoint = linkedlistMidpoint(head);
  let reversedSecondHalf = reverseLinkedList(midpoint).next;
  midpoint.next = null;
  let currentHead = head;
  while (
    currentHead !== null &&
    currentHead.next !== null &&
    reversedSecondHalf.next &&
    reversedSecondHalf.next !== null
  ) {
    const next = currentHead.next;
    currentHead.next = reversedSecondHalf;
    reversedSecondHalf = reversedSecondHalf.next;
    currentHead.next.next = next;
  }
  return head;
};
