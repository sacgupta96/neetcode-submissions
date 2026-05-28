class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rl = grid.length,
            cl = grid[0].length;
        let ans = 0;
        const DIR = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];
        const dfs = (r, c) => {
            grid[r][c] = 2;
            let ans = 1;
            for (let [dr, dc] of DIR) {
                let nr = r + dr,
                    nc = c + dc;
                if (nr >= 0 && nc >= 0 && nr < rl && nc < cl && grid[nr][nc] === 1) {
                    ans +=  dfs(nr, nc);
                }
            }
            return ans;
        };

        for (let r = 0; r < rl; r++) {
            for (let c = 0; c < cl; c++) {
                if (grid[r][c] == 1) {
                    const numofIsland = dfs(r, c);
                    if (numofIsland > ans) {
                        ans = numofIsland;
                    }
                }
            }
        }

        return ans;
    }
}
