export class SinglyLLNode {
  value: number;
  next: SinglyLLNode | null;

  constructor(value: number, next: SinglyLLNode | null = null) {
    this.value = value;
    this.next = next;
  }
}
