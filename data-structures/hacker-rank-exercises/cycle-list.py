#This solution is O(n/2)

def traverse_list(slow, fast):
    if (fast == None or fast.next == None):
        return False;

    if (slow == fast):
        return True;

    slow = slow.next;
    fast = fast.next.next;
    
    return traverse_list(slow, fast)

def has_cycle(head):
    if not(head):
        return False;

    return traverse_list(head.next, head.next.next);