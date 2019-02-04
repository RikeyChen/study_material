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

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;
  let head;

  if (l1.val <= l2.val) {
    head = l1;
    l1 = l1.next;
  } else {
    head = l2;
    l2 = l2.next;
  }

  let prevNode = head;

  while (l1 && l2) {
    if (l1 && l1.val <= l2.val) {
      prevNode.next = l1;
      l1 = l1.next;
      prevNode = prevNode.next;
    } else if (l2 && l2.val < l1.val) {
      prevNode.next = l2;
      l2 = l2.next;
      prevNode = prevNode.next;
    }
  }
  if (!l1) {
    prevNode.next = l2;
  } else if (!l2) {
    prevNode.next = l1;
  }

  return head;
};

// dynamic programming problem

const maxProfit = (prices) => {
  if (prices.length === 0) return 0;
  let profit = 0;
  let tempLow = prices[0];
  let tempHigh = prices[0];

  for (i = 1; i < prices.length; i++) {
    if (prices[i] < tempLow) {
      tempLow = prices[i];
      tempHigh = prices[i];
    }

    if (prices[i] > tempHigh) {
      tempHigh = prices[i];
    }

    if (tempHigh - tempLow > profit) profit = tempHigh - tempLow;
  }

  return profit;
};

// maxDepth n-ary tree;
var maxDepth = function(root) {
    if (!root) return 0;
    if (!root.children.length) return 1;
    let depth = 0;

    root.children.forEach(child => {
        depth = Math.max(maxDepth(child), depth)
    })

    return depth + 1;
};

var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;

  let maxSum;
  let currSum = 0;

  for (i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (maxSum === undefined) {
      maxSum = currSum;
    }

    if (currSum > maxSum) maxSum = currSum;
    if (currSum < 0) currSum = 0;
  }

  return maxSum;
};

var reverseList = function (head) {
  let currNode = head;
  let prevNode = null;
  while (currNode) {
    let nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
};