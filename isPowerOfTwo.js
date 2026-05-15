/*
Problem Understanding

1. Power of 2 means:
   1, 2, 4, 8, 16, 32...

2. Every power of 2 is divisible by 2
   until it becomes 1.

3. If number becomes 1 → true
   Otherwise → false

Examples:
8 → 4 → 2 → 1  => true
6 → 3           => false

Logic:
- First check number > 0
- Use while loop
- Divide by 2 repeatedly
- Finally check n === 1
*/
var isPowerOfTwo=function(n){
    if(n<=0){
        return false;
    }
    while(n%2===0){
        n=n/2;
    }
    return n===1;

};
console.log(isPowerOfTwo(6));   // true
console.log(isPowerOfTwo(8));