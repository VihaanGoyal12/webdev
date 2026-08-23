// function add(a,b,cb){
//     let result = a+b;
//     cb(result);
// }
// // add(2,4,function(val){
// //     console.log(val);
// // });
// add(2,4,(val => { console.log(val);}));

function add(a,b,cb){
    let result = a+b;
    cb(result);

    return () => console.log(result);
}
// add(2,4,function(val){
//     console.log(val);
// });
let resultFunc = add(4,10, ()=> {});
resultFunc();