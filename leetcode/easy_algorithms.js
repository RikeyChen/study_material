// with additional memory
let singleNumber = function (nums) {
  const numCounter = {};
  nums.forEach(i => (numCounter[i] ? numCounter[i]++ : numCounter[i] = 1));

  for (num in numCounter) {
    if (numCounter[num] === 1) return num;
  }
};

// one line solution
// explanation:
// (1) a ^ b = b ^ a;
// (2)(a ^ b) ^ c = a ^ (b ^ c);
// (3) a ^ a = 0, a ^ 0 = a;
// the ^ means XOR.

//   a ^ b ^ b ^ c ^ c = a ^ 0 ^ 0 = a, so in this problem, the result is the element appears once.
const singleNumber = (nums) => nums.reduce((accum, num) => accum ^ num, 0)

// brute force way
const longestPalindrome = (s) => {
  if (s.length === 0) return ""
  let longestPal = s[0];
  for (idx1 = 0; idx1 < s.length - 1; idx1++) {
    let substring = s[idx1];
    for (idx2 = idx1 + 1; idx2 < s.length; idx2++) {
      substring += s[idx2]
      if (palindrome(substring) && substring.length > longestPal.length) {
        longestPal = substring;
      }
    }
  }
  return longestPal;
};

const palindrome = (s) => {
  for (i = 0, j = s.length - 1; i <= j; i++) {
    if (s[i] !== s[j]) return false;
    j--;
  }
  return true;
}

// better way with Dynamic Programming
var longestPalindrome = function (s) {
  /* Preprocess s: insert '#' between characters, so we don't need to worry about even or odd length palindromes. */
  var newStr = "#";
  for (var i = 0; i < s.length; i++) newStr += s.charAt(i) + "#";
  /* Process newStr */
  /* dp[i] is the length of LPS centered at i */
  var dp = [];
  /**
   * For better understanding, here we define "friend substring", or "friend":
   * "friend substring" has the largest end-index in all checked substrings that
   * are palindromes. We start at friendCenter = 0 and update it in each cycles.
   */
  var friendCenter = 0, friendRadius = 0, lpsCenter = 0, lpsRadius = 0;
  /* j is the symmetry of i with respect to friendCenter */
  var j;
  for (var i = 0; i < newStr.length; i++) {
    /* Calculate dp[i] */
    if (friendCenter + friendRadius > i) {
      /**
       * This is the most important part of the algorithm.
       *
       * Normally we start from dp[i] = 1 and then try to expand dp[i] by doing brute-force palindromic
       * checks. However, if i is in the range of friend (friendCenter + friendRadius > i), we can expect
       * dp[i] = dp[j] because friend is a palindrome. This only works within the range of friend, so the
       * max dp[i] we can trust = (friendEnd - i).
       *
       * Here is an example:
       *
       *     friendStart   j             friendCenter  i     friendEnd
       *               |   |             |             |     |
       * String: - - d c b a b c d - - - - - - - d c b a b c ? - - - - - - - -
       *               [--------friend (palindrome)--------]
       *
       * In this example, (friendEnd - i) = 3, so we can only be certain that radius <= 3 part around i
       * is a palindrome (i.e. "cbabc" part). We still need to check the character at "?".
       */
      j = friendCenter - (i - friendCenter);
      dp[i] = Math.min(dp[j], (friendCenter + friendRadius) - i);
    }
    else {
      /* Calculate from scratch */
      dp[i] = 1;
    }
    /* Check palindrome and expand dp[i] */
    while (i + dp[i] < newStr.length && i - dp[i] >= 0 && newStr[i + dp[i]] == newStr[i - dp[i]]) dp[i]++;
    /* Check if i should become the new friend */
    if (friendCenter + friendRadius < i + dp[i]) {
      friendCenter = i;
      friendRadius = dp[i];
    }
    /* Update longest palindromic substring */
    if (lpsRadius < dp[i]) {
      lpsRadius = dp[i];
      lpsCenter = i;
    }
  }
  return s.substring((lpsCenter - lpsRadius + 1) / 2, (lpsCenter + lpsRadius - 1) / 2);
};