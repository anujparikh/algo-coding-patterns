import { SinglyLLNode } from "../utils/Node";

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
  let slow = head;
  let fast = head.next;
  while (slow.next !== null) {
    if (slow === fast) {
      return slow;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return null;
};
