var moveZeroes = function(nums) {

    let index = 0;

    // Move non-zero elements forward
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    // Fill remaining positions with 0
    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }

    return nums;
};

// Test Cases
console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0,0,1]));