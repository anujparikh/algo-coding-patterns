import { SinglyLLNode } from "../utils/Node";

const reverseLinkedlist = (head: SinglyLLNode): SinglyLLNode | null => {
    let previous: SinglyLLNode | null = null;
    let next: SinglyLLNode | null = null;
    let current: SinglyLLNode | null = head;
    while (current !== null) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}