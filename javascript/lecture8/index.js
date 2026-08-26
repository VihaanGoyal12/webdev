let arr = [12,234,4,31,98,31,43];
// let sum = 0;
// function print(n){
//     console.log(n);
//     sum = sum+n;
//     return sum;
// }
// arr.forEach(print);
// console.log(sum);
//for each is a high order func

// function double(n){
//     return n*2;
// }
// let newarr = [];
// arr.forEach((num) =>newarr.push(num*2));
// console.log(newarr);
// let newarr = arr.forEach(double);
// console.log(newarr);
//gives nothing

// let newarr = arr.map(double);
// console.log(newarr);

// let ans = arr.find(num =>num === 4);
// console.log(ans);

// let ans = arr.findIndex(num =>num === 4);
// console.log(ans);

// let ans = arr.includes(num =>num === 4);
// console.log(ans);


// let newarr = arr.filter(num => num%2 == 0);
// console.log(newarr);

//0 based indexing, excluding last element
// let newarr = arr.slice(1,5);


//eats elements in the given range
let newarr = arr.splice(1,5);
console.log(newarr);
console.log(arr);