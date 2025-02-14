/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    let substringVowels = new Set();
    for (let j = i; j < word.length; j++) {
      if (!vowels.has(word[j])) break;
      substringVowels.add(word[j]);
      if (substringVowels.size === 5) count++;
    }
  }

  return count;
}