let arr = [12,23,31,98,31,43];
let sum = 0;
function print(n){
    console.log(n);
    sum = sum+n;
    return sum;
}
arr.forEach(print);
console.log(sum);
//for each is a high order func