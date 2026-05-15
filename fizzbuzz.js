// ==========================================
// LeetCode Problem: Fizz Buzz
// Difficulty: Easy
// Language: JavaScript
// ==========================================

// Rules:
// 1. If number divisible by both 3 and 5 → "FizzBuzz"
// 2. If divisible by 3 → "Fizz"
// 3. If divisible by 5 → "Buzz"
// 4. Otherwise return number as string

/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function(n) {

    // Create empty array to store results
    let result = [];

    // Loop from 1 to n
    for(let i = 1; i <= n; i++) {
// Loop from 1 to n
for(let i = 1; i <= n; i++) {

        // Check divisibility by both 3 and 5
        if(i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        }

        // Check divisibility by 3
        else if(i % 3 === 0) {
            result.push("Fizz");
        }

        // Check divisibility by 5
        else if(i % 5 === 0) {
            result.push("Buzz");
        }

        // Otherwise convert number into string
        else {
            result.push(i.toString());
        }
    }

    // Return final result array
    return result;
};
console.log(fizzBuzz(15));
// Time Complexity: O(n)
// Space Complexity: O(n)