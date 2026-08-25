let arr = [12,23,31,98,31,43];
// let sum = 0;
// function print(n){
//     console.log(n);
//     sum = sum+n;
//     return sum;
// }
// arr.forEach(print);
// console.log(sum);
//for each is a high order func

function double(n){
    return n*2;
}
// let newarr = [];
// arr.forEach((num) =>newarr.push(num*2));
// console.log(newarr);
// let newarr = arr.forEach(double);
// console.log(newarr);
//gives nothing

let newarr = arr.map(double);
console.log(newarr);
