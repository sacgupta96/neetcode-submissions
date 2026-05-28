class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];

        const result = [];
        const queue = [root];

        while (queue.length) {
            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const node = queue.shift();

                // last node of this level
                if (i === size - 1) {
                    result.push(node.val);
                }

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        return result;
    }
}