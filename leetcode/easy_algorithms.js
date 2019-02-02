// with additional memory
let singleNumber = function (nums) {
  const numCounter = {};
  nums.forEach(i => (numCounter[i] ? numCounter[i]++ : numCounter[i] = 1));

  for (num in numCounter) {
    if (numCounter[num] === 1) return num;
  }
};
