// @ts-nocheck
import { SinglyLLNode } from "../utils/Node";

const reverseSubLinkedList = (head: SinglyLLNode | null, p: number, q: number): SinglyLLNode | null => {
    let current = head;
    let previous = null;
    let counter = 0;

    while (current !== null && counter < p - 1) {
        previous = current;
        current = current.next;
        counter++;
    }

    let lastNodeOfFirstPart = previous;
    let lastNodeOfSubList = current;
    counter = 0;

    previous = null;
    let next = null;
    while (current !== null && counter < q - p + 1) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        counter++;
    }

    if (lastNodeOfFirstPart !== null) {
        lastNodeOfFirstPart.next = previous;
    } else {
        head = previous;
    }

    lastNodeOfSubList.next = current;
    return head;
}