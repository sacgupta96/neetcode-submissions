class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const DIR = [[0,1], [1,0], [0,-1], [-1,0]];
        const rl = grid.length, cl = grid[0].length;
        let fresh = 0;
        const queue = [];

        // Initialize queue with all rotten oranges
        for (let r = 0; r < rl; r++) {
            for (let c = 0; c < cl; c++) {
                if (grid[r][c] === 2) queue.push([r, c]);
                if (grid[r][c] === 1) fresh++;
            }
        }

        let minutes = 0;

        while (queue.length && fresh > 0) {
            let size = queue.length;

            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                for (let [dr, dc] of DIR) {
                    const nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nc >= 0 && nr < rl && nc < cl && grid[nr][nc] === 1) {
                        grid[nr][nc] = 2;
                        fresh--;
                        queue.push([nr, nc]);
                    }
                }
            }

            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
