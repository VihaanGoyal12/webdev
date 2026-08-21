function sayHello(){
    console.log("hello");
}
sayHello();

function nums(){
    console.log(arguments);
    let sum = 0;
    for(let i =0;i<arguments.length;i++){
        sum = sum+arguments[i];
    }
    return sum;
}
let ans = nums(10,56,34,9,56);
console.log(ans);


// this works
sayHello2();
function sayHello2(){
    console.log('hey therr');
}

// sayHello2();//this gives error, arrow funciton mei we cant define function after calling
// let sayHello2 = () => {
//     console.log('hey there');
// }