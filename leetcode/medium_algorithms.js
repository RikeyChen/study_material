
let findAndReplacePattern = function (words, pattern) {
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
