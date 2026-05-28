class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        
        if(p === null && q === null) return true;
        if(p === null && q !== null) return false;
        if(q === null && p !== null) return false;
        if(p.val !== q.val) return false;

        let isLsame = this.isSameTree(p.left , q.left);
        let isRsame = this.isSameTree(p.right , q.right);

        return isLsame && isRsame
    }
}
