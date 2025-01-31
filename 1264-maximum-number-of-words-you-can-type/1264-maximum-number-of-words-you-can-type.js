/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let words = text.split(" ");
    let brokenSet = new Set(brokenLetters);
    let count = 0;

    for (let word of words) {
        let canType = true;
        for (let char of word) {
            if (brokenSet.has(char)) {
                canType = false;
                break;
            }
        }
        if (canType) count++;
    }

    return count;
};