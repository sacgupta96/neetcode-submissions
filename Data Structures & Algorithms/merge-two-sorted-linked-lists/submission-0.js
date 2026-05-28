/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(!list1) return list2
        if(!list2) return list1
        let newList = new ListNode(0);
        let dum = newList
        let a = list1 , b = list2;

        while(a && b) {
            if(a.val > b.val) {
                dum.next = b;
                b = b.next;
            } else {
                dum.next = a;
                a = a.next;
            }
            dum = dum.next
        }

        if(a) {
            dum.next = a;
        }
        if(b) {
            dum.next = b;
        }
        return newList.next
    }
}
