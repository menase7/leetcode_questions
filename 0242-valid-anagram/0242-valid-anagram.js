/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i])) {
            mapS.set(s[i], mapS.get(s[i]) + 1)
        } else {
            mapS.set(s[i], 1)
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (mapT.has(t[j])) {
            mapT.set(t[j], mapT.get(t[j]) + 1)
        } else {
            mapT.set(t[j], 1)
        }
    }

    for(const key of mapS.keys()){
        if(mapS.get(key) !== mapT.get(key)){
            return false
        }
    }

    return true;
};