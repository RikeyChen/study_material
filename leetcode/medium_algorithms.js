
const findAndReplacePattern = function (words, pattern) {
  const matches = [];
  for (i = 0; i < words.length; i++) {
    if (words[i].length !== pattern.length) continue;
    const wordsMap = {};
    const patternMap = {};
    let perm = true;
    for (j = 0; j < words[i].length; j++) {
      if (wordsMap[words[i][j]] !== patternMap[pattern[j]]) {
        perm = false;
        break;
      }
      wordsMap[words[i][j]] = j;
      patternMap[pattern[j]] = j;
    }
    if (perm) matches.push(words[i]);
  }
  return matches;
};

// If input was "(()))" the result is easy because it's only missing 1 left paren, but if your input was ")))((", you can't just get the difference of the left and brackets now because each ")" needs a previous "(" and each "(" needs a later ")". Thus, each ")" will add to the result if there is no previous "(", otherwise you can just subtract from leftBrackets because that would be considered a valid bracket.
let minAddToMakeBracketsValid = function (S) {
  let leftBrackets = 0;
  let result = 0;
  for (i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      leftBrackets += 1;
    } else {
      leftBrackets > 0 ? leftBrackets -= 1 : result += 1;
    }
  }
  return leftBrackets + result;
};
