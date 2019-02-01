
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
const minAddToMakeBracketsValid = function (S) {
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


var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  let rootVal = null;
  let rootIdx;
  for (i = 0; i < nums.length; i++) {
    if (rootVal === null || nums[i] > rootVal) {
      rootVal = nums[i];
      rootIdx = i;
    }
  }
  const root = new TreeNode(rootVal);

  root.left = constructMaximumBinaryTree(nums.slice(0, rootIdx));
  root.right = constructMaximumBinaryTree(nums.slice(rootIdx + 1, nums.length));

  return root;
};


// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R(inclusive).
// The binary search tree is guaranteed to have unique values.

//   Example 1:
// Input: root = [10, 5, 15, 3, 7, null, 18], L = 7, R = 15
// Output: 32

var rangeSumBST = function (root, L, R) {
  let sum = 0;

  if (root.val >= L && root.val <= R) {
    sum += root.val;
  }

  if (!root.left && !root.right) return sum;

  if (root.left && root.val >= L) {
    sum += rangeSumBST(root.left, L, R);
  }

  if (root.right && root.val <= R) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};

// const totalFruit = (tree) => {
//   let finalCount = 0;
//   let currSet = {};
//   let currCount = 0;
//   let currDistinctFruit = 0;
//   let secondFruitStartIdx = 0;
//   let secondFruit = 0;
//   for (let i = 0; i < tree.length; i++) {
//     if (currSet[tree[i]]) {
//       currCount += 1;
//       if (finalCount < currCount) finalCount = currCount;
//     } else if (currDistinctFruit < 2) {
//       if (currDistinctFruit === 1) {
//         secondFruitStartIdx = i;
//         secondFruit = tree[i];
//       }
//       currDistinctFruit += 1;
//       currSet[tree[i]] = true;
//       currCount += 1;
//     } else {
//       if (finalCount < currCount) {
//         finalCount = currCount;
//       }
//       currCount = (i - secondFruitStartIdx) + 1;
//       secondFruitStartIdx = i;
//       secondFruit = tree[i];
//       currSet = { [secondFruit]: true, [tree[i]]: true };
//     }
//   }
//   return finalCount;
// };

const addTwoNumbers = (l1, l2) => {
  if (!l1 && !l2) return 0;
  const head = l1;
  let remainder = 0;
  let prevl1;
  let prevl2;
  while (l1 || l2) {
    if (!l1) {
      l1 = new ListNode(0);
      prevl1.next = l1;
    }

    if (!l2) {
      l2 = new ListNode(0);
      prevl2.next = l2;
    }

    l1.val += l2.val + remainder;
    remainder = 0;
    if (l1.val >= 10) {
      l1.val %= 10;
      remainder = 1;
    }
    prevl1 = l1;
    prevl2 = l2;
    l1 = l1.next;
    l2 = l2.next;
  }
  if (remainder > 0) prevl1.next = new ListNode(remainder);
  return head;
};


let numIslands = function (grid) {
  let count = 0;
  if (grid.length === 0) return 0;

  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

const dfs = (grid, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== '1') {
    return;
  }

  grid[i][j] = -1;
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
};
