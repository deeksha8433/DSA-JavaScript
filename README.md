# DSA JavaScript Journey

This repository contains my daily DSA practice problems in JavaScript.

## Completed Problems
- Day 1: Two Sum
- Day 2: FizzBuzz

## Goals
- Improve problem-solving skills
- Learn JavaScript deeply
- Build coding consistency

## Language Used
- JavaScript
// Iterate through array
// Time Complexity: O(n)
// Space Complexity: O(n)
## Day 3 Progress
Learning GitHub consistency.
## Progress Tracker
Started maintaining daily DSA consistency.
# DSA JavaScript Practice

## Day 3 - Palindrome Number

### Problem
Check whether a number is palindrome or not.

### Concepts Used
- While Loop
- Modulus Operator (%)
- Math.floor()
- Comparison Operator
- Variable Assignment

### JavaScript Solution

```javascript
var isPalindrome = function(x) {
    let original = x;
    let reverse = 0;

    if (x < 0) {
        return false;
    }

    while (x > 0) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }

    return original === reverse;
};