class Codec {
    /**
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "";

        const queue = [root];
        const res = [];

        while (queue.length) {
            const node = queue.shift();
            if (node) {
                res.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                res.push("null");
            }
        }

        return res.join(",");
    }

    /**
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (!data) return null;

        const values = data.split(",");
        const root = new TreeNode(Number(values[0]));
        const queue = [root];
        let i = 1;

        while (queue.length) {
            const node = queue.shift();

            if (values[i] !== "null") {
                node.left = new TreeNode(Number(values[i]));
                queue.push(node.left);
            }
            i++;

            if (values[i] !== "null") {
                node.right = new TreeNode(Number(values[i]));
                queue.push(node.right);
            }
            i++;
        }

        return root;
    }
}
