/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root) return []
        const ans = [];

        const stack = [root];

        while (stack.length) {
            let currLen = stack.length;
            let temp = [];
            for (let i = 0; i < currLen; i++) {
                const node = stack.shift();
               
                    temp.push(node.val);
               

                if (node.left) {
                    stack.push(node.left);
                }
                if (node.right) {
                    stack.push(node.right);
                }
            }
            ans.push(temp);
        }

        return ans;
    }
}
