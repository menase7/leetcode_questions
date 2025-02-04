/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    let count = 0;
    let seen = new Map();
    
    for (let word of words) {
        let uniqueChars = [...new Set(word)].sort().join('');
        
        count += seen.get(uniqueChars) || 0;
        
        seen.set(uniqueChars, (seen.get(uniqueChars) || 0) + 1);
    }
    
    return count;
};