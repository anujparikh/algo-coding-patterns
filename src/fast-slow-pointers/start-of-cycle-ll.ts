import { SinglyLLNode } from "../utils/Node";

const startOfLinkedListCycle = (head: SinglyLLNode): SinglyLLNode => {
  if (head === null) {
    return null;
  }
  const length = lengthOfCycle(head);
  if (length === 0) {
    return null;
  }
  let pointer1 = head;
  let pointer2 = head;
  let counter = 0;
  while (counter < length) {
    pointer2 = pointer2.next;
    counter++;
  }
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
};

const lengthOfCycle = (head: SinglyLLNode): number => {
  let length = 0;
  let loopStart = findLoopNode(head);
  if (loopStart !== null) {
    let pointer = loopStart.next;
    while (pointer !== loopStart) {
      pointer = pointer.next;
      length++;
    }
    length++;
  }
  return length;
};

const findLoopNode = (head: SinglyLLNode): SinglyLLNode => {
  let pointer1 = head;
  let pointer2 = head.next;
  while (
    pointer2 !== null &&
    pointer2.next !== null &&
    pointer2.next.next !== null
  ) {
    if (pointer1 === pointer2) {
      return pointer1;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }
  return null;
};
