class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let q = [];
        let freshCount = 0;
        const rl = grid.length,
            cl = grid[0].length;
        const DIR = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];
        for (let r = 0; r < rl; r++) {
            for (let c = 0; c < cl; c++) {
                if (grid[r][c] === 2) {
                    q.push([r, c]);
                }
                if (grid[r][c] === 1) {
                    freshCount++;
                }
            }
        }

        let time = 0;
        if (freshCount == 0) return 0;
        while (q.length > 0) {
            time++;
            let temp = [];
            for (let [r, c] of q) {
                for (let [dr, dc] of DIR) {
                    const nr = r + dr,
                        nc = c + dc;
                    if (nr >= 0 && nc >= 0 && nr < rl && nc < cl && grid[nr][nc] == 1) {
                        temp.push([nr, nc]);
                        grid[nr][nc] = 2;
                        freshCount--
                    }
                }
            }
            q = temp;
        }
   
        if(freshCount > 0) return -1

        return time - 1;

        
    }
}
