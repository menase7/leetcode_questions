/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversed = x.toString().split("").reverse().join("");
    let result = x == reversed;
    if(result){
        return true;
    }
    return false;
};