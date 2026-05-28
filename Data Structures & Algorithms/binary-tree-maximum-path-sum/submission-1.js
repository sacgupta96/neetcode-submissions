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

            let left = maxpath(root.left);
            let right = maxpath(root.right);
            let temp = left > 0 ? root.val + left : root.val
            temp = right > 0 ? temp + right : temp
            ans = Math.max(ans , temp)

            return Math.max(0 , left , right) + root.val
        }

        maxpath(root)

        return ans
    }
}
