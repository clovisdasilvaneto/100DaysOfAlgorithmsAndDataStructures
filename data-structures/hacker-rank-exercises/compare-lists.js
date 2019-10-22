function CompareLists(list1, list2) {
  if (!list1 && !list2) {
    return 1;
  }

  if ((list1 && !list2) || (!list1 && list2) || list1.data !== list2.data) {
    return 0;
  }

  return CompareLists(list1.next, list2.next);
}
