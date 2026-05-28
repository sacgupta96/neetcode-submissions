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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        return this.inorder(root).at(k - 1)
    }

    inorder(root) {
        const res = []

        const recur = (node) => {
            if(!node) return;

            recur(node.left);
            res.push(node.val);
            recur(node.right);
        }

        recur(root)
        return res;
    }
}
