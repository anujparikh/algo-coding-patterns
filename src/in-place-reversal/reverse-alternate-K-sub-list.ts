// @ts-nocheck
import { SinglyLLNode } from "../utils/Node";

const reverseAlternateKSubList = (head: SinglyLLNode | null, k: number) => {
    let counter = 0;
    let length = 0;
    let c = head;
    while (c !== null) {
        length++;
        c = c.next;
    }
    let times = Math.ceil(length / k);
    while (counter < times) {
        if (counter % 2 === 0) {
            head = reverseSubList(head, (counter * k) + 1, (counter + 1) * k);
        }
        counter++;
    }
    return head;
}

const reverseSubList = (head: SinglyLLNode | null, p: number, q: number) => {
    let previous = null;
    let current = head;
    let counter = 0;

    while (current !== null && counter < p - 1) {
        previous = current;
        current = current.next;
        counter++;
    }

    const lastNodeOfFirstPart = previous;
    const lastNodeOfSubList = current;
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

    if (lastNodeOfFirstPart === null) {
        head = previous;
    } else {
        lastNodeOfFirstPart.next = previous;
    }

    lastNodeOfSubList.next = current;

    return head;
}