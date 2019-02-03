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