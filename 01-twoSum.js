// https://leetcode.com/problems/two-sum/description/
// Difficulty: Easy

const nums = [2, 3, 6, 9];

const twoSum = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        const result = Array(i, j);
        return result;
      }
    }
  }
};
console.log(twoSum(nums, 9));
