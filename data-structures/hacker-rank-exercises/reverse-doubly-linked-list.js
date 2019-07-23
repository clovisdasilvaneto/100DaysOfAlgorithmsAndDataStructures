// Complete the reverse function below.

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(head) {
  const temp = head.next;
  head.next = head.prev;
  head.prev = temp;

  if (head.next) {
    return reverse(head.next);
  }

  return head;
}
