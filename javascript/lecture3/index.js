var num= 22;
console.log(num);
//var has global scope

let age = 18;
console.log(age);
//let has local scope

const val = 30;
console.log(val);
//const has local scope and cant be altered later in the code
console.log('hello '+ 'vihaan');


let str = "hello";
let date = null;
let date2 = undefined;

//objects
let person = {
    firstname: 'vihaan',
    lastname: 'goyal',
    age: 18,
    isloggedin: false,
}
console.log(person);

let a = true;
let b  = 5;
console.log(a+b);// gives 6 bcz true = 1;

console.log('11'*10);//gives product of these two but as an int
console.log('10'+10);//simply concatenates as string
console.log('10'+'10');//same as above
console.log('a' *5)// gives nan(not a number)
console.log('a'+1);//gives concatation

console.log(typeof('11'*5));
