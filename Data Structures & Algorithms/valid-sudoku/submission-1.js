class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({length: 9} , () => new Set())
        const col = Array.from({length: 9} , () => new Set())
        const box = Array.from({length: 9} , () => new Set())
        
        for(let i =0;i<9;i++) {
            for(let j =0;j < 9;j++) {
                if(board[i][j] === '.') continue
                if(row[i].has(board[i][j])) {
                    return false;
                }
                if(col[j].has(board[i][j])) {
                    return false
                }
                
                let num = 3 * Math.floor(i/3) + Math.floor(j/3);
                if(box[num].has(board[i][j])){
                    return false
                }
                box[num] = box[num].add(board[i][j]) || new Set(board[i][j])
                row[i].add(board[i][j])
                col[j].add(board[i][j])

                
            }
        }
        console.log(box)
        return true;
    }
}
