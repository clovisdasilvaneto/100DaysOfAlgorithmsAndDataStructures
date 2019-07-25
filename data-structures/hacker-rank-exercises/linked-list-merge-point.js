function findMergeNode(headA, headB) {
  const hash = { [headA.next.data]: headA.next.data };

  while (!hash[headB.data]) {
    if (headA.next) {
      hash[headA.next.next.data] = headA.next.next.data;
      headA = headA.next;
    }

    headB = headB.next;
  }

  return hash[headB.data];
}
