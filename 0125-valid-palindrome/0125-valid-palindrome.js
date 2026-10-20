/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;

    const cleanText = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let right = cleanText.length - 1;
    console.log(cleanText);

    while (left < right) {
        if (cleanText[left] !== cleanText[right]) {
            return false
        }
        left++
        right--
    }

    return true;
};