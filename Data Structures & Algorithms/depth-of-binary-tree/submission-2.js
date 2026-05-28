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
    maxDepth(root) {
        if(!root) return 0

        const stack = [[root , 1]]
        let ans = 0;
        while(stack.length > 0 ){
            const [node , height] = stack.pop();
            ans = Math.max(height , ans)
            if(node.left) {
                stack.push([node.left , height + 1])
            }
            if(node.right) {
                stack.push([node.right , height + 1])
            }
        }

        return ans
    }
}
