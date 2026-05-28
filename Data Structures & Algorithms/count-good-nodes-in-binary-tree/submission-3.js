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
    goodNodes(root) {
        const ans = [];

        this.check(root, ans, -Infinity);

        return ans.length;
    }

    check(root, ans, currMax) {
        if (!root) return;
        if (root.val >= currMax) {
            ans.push(root.val);
        }
        currMax = Math.max(currMax, root.val);

        this.check(root.left, ans, currMax);

        this.check(root.right, ans, currMax);
    }
}
