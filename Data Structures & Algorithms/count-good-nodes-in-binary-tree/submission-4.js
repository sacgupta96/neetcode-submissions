class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        return this.dfs(root, -Infinity);
    }

    dfs(node, maxVal) {
        if (!node) return 0;
        let count = node.val >= maxVal ? 1 : 0;
        maxVal = Math.max(maxVal, node.val);
        return (
            count +
            this.dfs(node.left, maxVal) +
            this.dfs(node.right, maxVal)
        );
    }
}