export class SinglyLLNode {
  value: number;
  next: SinglyLLNode | null;

  constructor(value: number, next: SinglyLLNode | null = null) {
    this.value = value;
    this.next = next;
  }

  static print(head: SinglyLLNode): void {
    while (head !== null) {
      console.log(head.value);
      head = head.next;
    }
  }
}
