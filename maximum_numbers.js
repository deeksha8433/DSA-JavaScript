var numberOfPairs = function(nums) {

    let map = {};
    let pairs = 0;

    for (let num of nums) {

        map[num] = (map[num] || 0) + 1;

        if (map[num] === 2) {
            pairs++;
            map[num] = 0;
        }
    }

    let leftover = nums.length - (pairs * 2);

    return [pairs, leftover];
};
console.log(numberOfPairs([1,3,2,1,3,2,2]));