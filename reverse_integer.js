var reverse=function(x){
    let reverse=0;
    let sign=x<0?-1:1;
    x=Math.abs(x);
    while(x>0){
        let digit=x%10;
        reverse=reverse*10+digit;
        x=Math.floor(x/10);

    }
    return reverse *sign;
};
console.log(reverse(123));
console.log(reverse(-456));
console.log(reverse(120));