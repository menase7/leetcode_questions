/**
 * @param {string} s
 * @return {string}
 */
function reverseOnlyLetters(s) {
  const arr = s.split("");

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && !isLetter(arr[left])) {
      left++;
    }

    while (left < right && !isLetter(arr[right])) {
      right--;
    }

    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr.join("");
}

function isLetter(ch) {
  return /[a-zA-Z]/.test(ch);
}

