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
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head , fast = head.next;

        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let newHead = slow.next;
        let newNewhead = this.reverse(newHead)
        slow.next = null;
        

        while(newNewhead) {
            let temp1 = head.next;let temp2 = newNewhead.next;
            head.next = newNewhead;
            newNewhead.next = temp1;
            head = temp1 , newNewhead = temp2
        }
    }

    reverse(head) {
        let prev = null , curr = head;

        while(curr) {
            let temp = curr.next;
            curr.next = prev;
            prev= curr;
            curr= temp;
        }

        return prev
    }
}
