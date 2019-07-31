function sortedInsert(head, data) {
  if (head.data >= data) {
    const old = head;
    head = {
      data: data,
      next: old,
      prev: old.prev
    };
    head.next.prev = head;
  } else if (head.next) {
    head.next = sortedInsert(head.next, data);
  } else {
    head.next = {
      data,
      prev: head
    };
  }

  return head;
}
