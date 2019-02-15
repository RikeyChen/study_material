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