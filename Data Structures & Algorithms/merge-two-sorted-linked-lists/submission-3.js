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
        let dummyHead = new ListNode();
        let curr1 = list1 , curr2 = list2 , curr3 = dummyHead;
        while(curr1 && curr2) {
            console.log(curr1.val , curr2.val )
            if(curr1.val <= curr2.val) {
                curr3.next = curr1;
                curr1 = curr1.next;
            } else {
                curr3.next = curr2;
                curr2 = curr2.next;
            }
            curr3 = curr3.next;
        }

        if(curr1) {
            curr3.next = curr1;
        }
        if(curr2) {
            curr3.next = curr2;
        }

        return dummyHead.next
    }
}
