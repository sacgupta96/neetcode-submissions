class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let temp = []
        for(let i = 0;i< s.length;i++){
            if(s[i] === ')' && temp.at(-1) === '(') {
                temp.pop()
            }else if(s[i] === '}' && temp.at(-1) === '{') {
                temp.pop()
            }else if(s[i] === ']' && temp.at(-1) === '[') {
                temp.pop()
            } else {
                temp.push(s[i])
            }
            console.log(temp)
        }

        return temp.length === 0 ? true : false
    }
}
