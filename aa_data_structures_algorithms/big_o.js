// find missing number
// Assume an array of non - negative integers.A second array is formed by shuffling the elements of the first array and deleting a random element.Given these two arrays, find which element is missing in the second array.Do this in linear time with constant memory use.

// Example input / output


const findMissingNumber = (arr1, arr2) => {
  let result = arr1[0];
  for (let i = 1; i < arr1.length; i++) {
    result ^= arr1[i];
  }

  for (let j = 0; j < arr2.length; j++) {
    result ^= arr2[j];
  }

  return result;
};

// console.log(findMissingNumber([8, 3, 5, 1], [1, 5, 3])); // = 8

// console.log(findMissingNumber([1, 1, 1, 1], [1, 1, 1])); // = 1

// console.log(findMissingNumber([3, 5, 4, 8, 7, 9], [7, 4, 3, 5, 9])); // = 8
