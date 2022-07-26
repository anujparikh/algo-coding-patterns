// @ts-nocheck
import { SinglyLLNode } from "../utils/Node";

const reverseSubLinkedList = (head: SinglyLLNode | null, p: number, q: number): SinglyLLNode | null => {
    let current: SinglyLLNode | null = head;
    let previous: SinglyLLNode | null = null;
    let counter = 0;
    while (counter < p - 1) {
        previous = current;
        current = current?.next || null;
        counter++;
    }
    counter = 0;
    let reversePrevious: SinglyLLNode | null = null;
    let reverseCurrent: SinglyLLNode | null = current;
    let reverseNext: SinglyLLNode | null = null;
    while (counter < q - p + 1 && reverseCurrent) {
        reverseNext = reverseCurrent.next;
        reverseCurrent.next = reversePrevious;
        reversePrevious = reverseCurrent;
        reverseCurrent = reverseNext;
        counter++;
    }
    previous.next = reversePrevious;
    current.next = reverseCurrent;
    return head;
}