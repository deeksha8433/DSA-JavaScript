// Two Sum Problem - Optimized using HashMap
// Time Complexity: O(n)
// Space Complexity: O(n)

var twoSum = function(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    // If complement exists, we found the answer
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    // Store index of current number
    map.set(nums[i], i);
  }

  return [];
};