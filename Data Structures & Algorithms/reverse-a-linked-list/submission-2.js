/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

// 1 -> 2 -> 3 -> 4

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head) return null
        let prev = new ListNode();
        let curr = head;
        while(curr !== null) {
            let newNode = curr.next;
            curr.next = prev;
            prev = curr
            curr = newNode;
        }
        head.next = null
        return prev;
    }
}
