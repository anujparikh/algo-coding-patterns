// @ts-nocheck
import { SinglyLLNode } from "../utils/Node";

const rotateLinkedList = (head: SinglyLLNode | null, rotations: number) => {
    if (head === null || rotations === 0) return head;
    let length = 0;
    let first = head;
    let current = head;
    let last = current;
    while (current !== null) {
        last = current;
        current = current.next;
        length++;
    }

    if (rotations % length === 0) return head;

    let counter = 0;
    let noOfRotations = rotations % length;
    last.next = first;
    let previous = null;
    while (counter < length - noOfRotations) {
        previous = first;
        first = first.next;
        counter++;
    }
    previous.next = null;
    return first;
}