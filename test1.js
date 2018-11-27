"use strict"
// var a = 2;
// b = 2;
// console.log(a)
//报错   在let声明之前 不允许使用该变量
// let a = 1;
// let b = 2;

// function b(){
//     console.log('outside')
// }

// (function(){
//     // var b;
//     if(false){
//         function b(){'inside'}
//     }
//     b()
//     //es5报错 b is undefined  相当于在内部var b ；
//     //es6打印 outside es6允许在
// }())
// let {a,b}={a:1,b:2};


// console.log(a)
const { jq,color,singSong } = require('./jq')


let arr = [1,2,3,4,5,6,67]

arr.forEach((item,index)=>{
    console.log(item,index)
})

jq();
color();
singSong()