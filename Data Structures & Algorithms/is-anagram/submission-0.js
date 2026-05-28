class Solution {
    convertToMap(str) {
        let map = {}
      
        str.split('').forEach((char) => {
            if(char in map) {
                map[char] +=1
            } else {
                map[char] = 1
            }
        })

        return map;
    }
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let map1 = this.convertToMap(s)
        let map2 = this.convertToMap(t)

        for(const key in map1) {
            if(map1[key] !== map2[key]) return false
        }

        return true;
    }

    
}
