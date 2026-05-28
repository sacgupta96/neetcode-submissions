class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
     groupAnagrams = (strs) => {
         const res = []
         const map = {}
         
         for(let str of strs) {
            const arr = Array(26).fill(0);
            for(let char of str){
                arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1 
            }
            let key = arr.reduce((a,b) => a+b+'-' , '')
            
            if(Object.keys(map).includes(key)) {
                map[key].push(str)
            } else {
                map[key] = [str]
            }
         }
         console.log(map)
         for(let item of Object.values(map)) {
            res.push(item)
         }

         return res
    }

    getKey = (str) => {
        
    }
}
