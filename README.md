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
# Reverse Integer - LeetCode

## Problem
Reverse digits of a signed 32-bit integer.

## Concepts Used
- While Loop
- Modulus Operator (%)
- Math.floor()
- Conditional Operator
- Number Reversal Logic

## JavaScript Solution

```javascript
var reverse = function(x) {
    let reverse = 0;
    let sign = x < 0 ? -1 : 1;

    x = Math.abs(x);

    while (x > 0) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }

    return reverse * sign;
};
# Power of Two

## Problem Statement
Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`.

A number is a power of two if it can be divided by 2 repeatedly until it becomes 1.

---

## Examples

Input: n = 8  
Output: true

Input: n = 6  
Output: false

---

## Approach

- First check if the number is greater than 0.
- Use a `while` loop to divide the number by 2 repeatedly.
- If the number becomes `1`, then it is a power of two.
- Otherwise, it is not.

---

## JavaScript Solution

```javascript
var isPowerOfTwo = function(n) {

    if (n <= 0) {
        return false;
    }

    while (n % 2 === 0) {
        n = n / 2;
    }

    return n === 1;
};
```

---

## Concepts Used

- Modulus Operator `%`
- While Loop
- Conditional Statements
- Number Manipulation

---

## Time Complexity

```text
O(log n)
```

## Space Complexity

```text
O(1)

```
# Day 3 - Valid Anagram

## Problem
Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, otherwise return `false`.

---

## Example

Input:
"anagram", "nagaram"

Output:
true

---

## JavaScript Solution

```javascript
var isAnagram = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let str1 = s.split('').sort().join('');
    let str2 = t.split('').sort().join('');

    return str1 === str2;
};

# Roman to Integer

## Problem
Convert a Roman numeral into an integer.

---

## Example

Input:
"III"

Output:
3

---

Input:
"MCMXCIV"

Output:
1994

---

## JavaScript Solution

```javascript
var romanToInt = function(s) {

    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {

        let current = map[s[i]];
        let next = map[s[i + 1]];

        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }

    return total;
};

## Majority Element
Solved using HashMap (Map) approach in JavaScript to find the element appearing more than n/2 times.


# Longest Common Prefix

## Problem
Find the longest common prefix string among an array of strings.

Example:

Input:
["flower","flow","flight"]

Output:
"fl"

---

## JavaScript Solution

```javascript
var longestCommonPrefix = function(strs) {

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {

        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }
    }

    return prefix;
};

console.log(
    longestCommonPrefix(["flower","flow","flight"])
);
Updated DSA progress

# Maximum Number in Array

## Problem
Find the maximum number from an array.

Example:

Input:
[3, 7, 2, 9, 5]

Output:
9

---

## JavaScript Solution

```javascript
function findMax(nums) {

    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}

console.log(findMax([3, 7, 2, 9, 5]));

# Integer to Roman

## Problem
Convert an integer into a Roman numeral.

## Concepts Used
- Arrays
- Greedy Algorithm
- Loops
- String Concatenation

## JavaScript Solution

```js
var intToRoman = function(num) {

    let values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];

    let symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {

        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }

    return result;
};
- Solved Integer to Roman problem in JavaScript


# Zigzag Conversion

## Problem
Convert a string into a zigzag pattern on a given number of rows.

## Example

Input:
"PAYPALISHIRING"
numRows = 3

Output:
"PAHNAPLSIIGYIR"

---

## JavaScript Solution

```javascript
var convert = function(s, numRows) {

    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    let rows = new Array(numRows).fill("");

    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {

        rows[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};

# Move Zeroes

## Problem
Move all zeroes to the end while maintaining the relative order of non-zero elements.

## Example

Input:
[0,1,0,3,12]

Output:
[1,3,12,0,0]

---

## JavaScript Solution

```javascript
var moveZeroes = function(nums) {

    let index = 0;

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) {
            nums[index] = nums[i];
            index++;
        }
    }

    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }

    return nums;
};