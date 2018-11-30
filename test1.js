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
// const { jq,color,singSong } = require('./jq')
// jq();
// color();
// singSong()

// let arr = [1,2,3,4,5,6,67]

// arr.forEach((item,index)=>{
//     console.log(item,index)
// })

//模版字符串编译

var template = `
                <ul>
                    <% for(var i=0; i<arr.length ; i++) { %>
                        <li><%= arr[i] %></li>
                    <% } %>
                </ul>
                `
var tem = `(function parse(arr){
    var output = '';

    function echo(html){
        output +=html;
    }
    ${template};
    return output;
})`;
function compile(template){
    var ev1 = /<%=(.+?)%>/g;
    var ev2 = /<%([\s\S]+?)%>/g;
    template = template
            .replace(ev1,'`); \n echo( $1 ); \n echo(`').replace(ev2,'`);\n $1 \n echo(`');
    template = 'echo (`' + template +'`)';
    // console.log('正则',template)

    var script = `(function parse(arr){
        var output = '';
        function echo(html){
            output +=html;
        }
        ${template};
        return output;
    })`;  
    // console.log(script,'script：：')
    return script
}
var pars = eval(compile(template))
console.log(pars)
var div = document.querySelector('#box');

// div.innerHTML = pars(['abb','bba','ccb'])
var b = `(function parse(a){console.log(11111)})`

//模版字符串编译

var x = 1;

function foo(xy){
    x = 3;
    (function(){x=2})();

    console.log(x)
}

foo()