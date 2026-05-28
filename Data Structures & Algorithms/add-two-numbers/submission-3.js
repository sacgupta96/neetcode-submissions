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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const dummy = new ListNode(0);
        let temp = dummy;
        let carry = 0;
        while(l1 || l2 || carry) {
            // console.log(l1.val || 0 , l2.val || 0 , carry)
            let num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
            carry = 0
            console.log(num)
            if(num > 9) {
                carry = 1;
                num = num - 10;
            }
            console.log(carry , num)
            temp.next = new ListNode(num);

            temp = temp.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        return dummy.next
    }
}
