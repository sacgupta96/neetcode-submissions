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

    constructor() {
        this.ans = 0
    }
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        if(!root) return 0;
        this.maxDepth(root)
        return this.ans - 1;      
    }

    maxDepth(root) {
        if(!root) return 0
        let left = this.maxDepth(root.left);
        let right = this.maxDepth(root.right);
        this.ans = Math.max(this.ans , 1 + left + right)
        return 1 + Math.max(left , right);        
    }

   
}
