class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const DIR = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        const q = [];
        let head = 0;

        // push all gates first
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    q.push([r, c]);
                }
            }
        }

        while (head < q.length) {
            const [r, c] = q[head++];

            for (const [dr, dc] of DIR) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    grid[nr][nc] === 2147483647
                ) {
                    grid[nr][nc] = grid[r][c] + 1;
                    q.push([nr, nc]);
                }
            }
        }
    }
}