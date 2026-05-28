class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        this.DIR = [
            [0, 1],
            [1, 0],
            [-1, 0],
            [0, -1],
        ];

        this.rl = board.length;
        this.cl = board[0].length;
        this.ans = false;

        for (let r = 0; r < this.rl; r++) {
            for (let c = 0; c < this.cl; c++) {
                if (word[0] === board[r][c] && !this.ans) {
                    const temp = board[r][c];
                    board[r][c] = "#";
                    this.dfs(r, c, board, 1, word);
                    board[r][c] = temp;
                }
            }
        }

        return this.ans;
    }

    dfs(r, c, board, idx, word) {
        if (idx === word.length) {
            this.ans = true;
            return;
        }

        for (let [dr, dc] of this.DIR) {
            let nr = r + dr,
                nc = c + dc;

            if (
                nr >= 0 &&
                nc >= 0 &&
                nr < this.rl &&
                nc < this.cl &&
                board[nr][nc] !== "#" &&
                board[nr][nc] === word[idx]
            ) {
                const temp = board[nr][nc];
                board[nr][nc] = "#";

                this.dfs(nr, nc, board, idx + 1, word);

                board[nr][nc] = temp;

                if (this.ans) return;
            }
        }
    }
}