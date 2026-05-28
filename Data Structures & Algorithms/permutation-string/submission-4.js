class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) { 
        if(s1.length > s2.length) return false;

        const s1arr = new Array(26).fill(0)
        const s2arr = new Array(26).fill(0)
        
        for(let i = 0;i< s1.length;i++) {
            s1arr[s1.charCodeAt(i) - 'a'.charCodeAt(0)] +=1
            s2arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)] +=1
        }
        let matches = 0;
        for(let i = 0;i < 26;i++){
            if(s1arr[i] === s2arr[i]) matches +=1;
        }
        let l = 0;
        for(let i = s1.length;i < s2.length;i++){
            console.log(matches , l , i)
            if(matches === 26) return true;

            let temp = s2.charCodeAt(i) - 'a'.charCodeAt(0);
            s2arr[temp] +=1;
            if(s2arr[temp] === s1arr[temp]) {
                matches += 1;
            } else if(s1arr[temp] + 1 === s2arr[temp]) {
                matches -=1;
            }
            temp = s2.charCodeAt(l) - 'a'.charCodeAt(0);
            s2arr[temp] -=1;
            if(s2arr[temp] === s1arr[temp]) {
                matches += 1;
            } else if(s1arr[temp]-1 === s2arr[temp]) {
                matches -=1;
            }
            l++;
            
        }
        return matches === 26;
    }
}
