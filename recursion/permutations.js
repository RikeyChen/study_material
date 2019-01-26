var permute = function (nums) {
  if (nums.length <= 1) return [nums];

  const first = nums[0];
  const ans = [];

  perms = permute(nums.slice(1, nums.length));
  perms.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const left = perm.slice(0, i);
      const right = perm.slice(i, perm.length);
      const merged = left.concat([first]).concat(right);

      ans.push(merged);
    }
  });
  return ans;
};
