var findMedianSortedArrays = function (nums1, nums2) {
  let combinedArray = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] <= nums2[0]) {
      combinedArray.push(nums1.shift());
    } else {
      combinedArray.push(nums2.shift());
    }
  }
  combinedArray = combinedArray.concat(nums1).concat(nums2)

  let mid = Math.floor(combinedArray.length / 2);
  if (combinedArray.length % 2 === 0) {
    return (combinedArray[mid - 1] + combinedArray[mid]) / 2
  } else {
    return combinedArray[mid];
  }
};

var findMedianSortedArrays = function (nums1, nums2) {
  let totalLength = nums1.length + nums2.length
  let idx1 = 0;
  let idx2 = 0;
  let currNum;
  let lastNum;

  while (idx1 + idx2 <= totalLength / 2) {
    if (currNum) {
      lastNum = currNum;
    }

    if (nums1[idx1] === undefined) {
      currNum = nums2[idx2]
      idx2++
    } else if (nums2[idx2] === undefined) {
      currNum = nums1[idx1]
      idx1++
    } else if (nums1[idx1] < nums2[idx2]) {
      currNum = nums1[idx1]
      idx1++
    } else {
      currNum = nums2[idx2]
      idx2++
    }
  }
  return totalLength % 2 === 0 ? (currNum + lastNum) / 2 : currNum
};