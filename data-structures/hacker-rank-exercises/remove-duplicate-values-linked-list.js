function removeDuplicates(head) {
  if (!head.next) {
    return head;
  }

  removeDuplicates(head.next);

  if (head.next.data == head.data) {
    head.next = head.next.next;
  }

  return head;
}
