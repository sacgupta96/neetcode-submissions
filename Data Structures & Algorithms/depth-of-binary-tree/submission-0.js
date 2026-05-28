

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(root === null) return 0
        let stack = [root] , count = 0

        while(stack.length > 0) {
            let size = stack.length;
           
            for(let i = 0;i < size;i++) {
                let node = stack.shift()
                if(node.left) {
                    stack.push(node.left)
                }
                if(node.right) {
                    stack.push(node.right)
                }
            }
            count++
        }

        return count;
    }
}
