/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= '0' && ch <= '9') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(ch);
        }
    }

    return stack.join('');
};