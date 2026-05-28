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
     * @return {number}
     */
    maxPathSum(root) {
        let ans = -Infinity
        const maxpath = (root) => {
            if(!root) return -Infinity;

            let left = Math.max(0 , maxpath(root.left));
            let right = Math.max(0 , maxpath(root.right));
            ans = Math.max(ans , left + right + root.val)
            return Math.max(left , right) + root.val
        }

        maxpath(root)

        return ans
    }
}
