var isPalindrome=function(x){
          let original=x;
          let reverse=0;
          // negative numbers are not palindromes
          if(x<0){
            return false;
          }
          while(x>0){
            let digit=x%10;
            reverse=reverse*10+digit;
            x=Math.floor(x/10);
          }
          return original===reverse;
};
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(0));     // true