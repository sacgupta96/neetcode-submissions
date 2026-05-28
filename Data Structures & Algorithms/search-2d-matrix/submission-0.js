class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix.length || !matrix[0].length) return false;

        // Find the row
        let top = 0, bottom = matrix.length - 1;
        while (top <= bottom) {
            const mid = Math.floor((top + bottom) / 2);

            if (matrix[mid][0] === target) return true;

            if (matrix[mid][0] < target) {
                top = mid + 1;
            } else {
                bottom = mid - 1;
            }
        }

        const row = bottom; // last row whose first element is <= target
        if (row < 0) return false;

        // Binary search inside that row
        let l = 0, r = matrix[0].length - 1;
        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if (matrix[row][mid] === target) return true;
            if (matrix[row][mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}