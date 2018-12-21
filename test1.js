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

// var template = `
//                 <ul>
//                     <% for(var i=0; i<arr.length ; i++) { %>
//                         <li><%= arr[i] %></li>
//                     <% } %>
//                 </ul>
//                 `
// var tem = `(function parse(arr){
//     var output = '';

//     function echo(html){
//         output +=html;
//     }
//     ${template};
//     return output;
// })`;
// function compile(template){
//     var ev1 = /<%=(.+?)%>/g;
//     var ev2 = /<%([\s\S]+?)%>/g;
//     template = template
//             .replace(ev1,'`); \n echo( $1 ); \n echo(`').replace(ev2,'`);\n $1 \n echo(`');
//     template = 'echo (`' + template +'`)';
//     // console.log('正则',template)

//     var script = `(function parse(arr){
//         var output = '';
//         function echo(html){
//             output +=html;
//         }
//         ${template};
//         return output;
//     })`;  
//     // console.log(script,'script：：')
//     return script
// }
// var pars = eval(compile(template))
// console.log(pars)
// var div = document.querySelector('#box');

// div.innerHTML = pars(['abb','bba','ccb'])
// var b = `(function parse(a){console.log(11111)})`

//模版字符串编译

// var f = ({foo,boo})=>{return `i'm${foo}and${boo}years`}

// console.log(f({foo:'jack',boo:20}))

//this 指向
// var name = 'outer'
// var box = document.querySelector('#box')
// var obj = {
//     name:'jack',
//     say:()=>{
//         console.log(this,'say')
//         return ()=>{
            
//             console.log(this.name,this)    
//         }
//     },
//     change:function(){
//         box.addEventListener('click',()=>{this.say()},false)
//     }
// }
// obj.change()
// obj.say()()
// console.log(this,'global')
// box.addEventListener('mousein',event=>{
   
//     this.innerHTML += 'document'
// },false)


// var arr = [1,2,3,4,5]
// var likearr = {
//     "0":1,
//     "1":2,
//     "2":3,
//     "length":3
// }


// function foo(){
//     this.name = 'foo'
// }


// function boo(){
//     this.age = 13
// }

// boo.prototype = new foo();

// var bo  = new boo();
// console.log(bo,'bo')
// console.log(Object.getPrototypeOf(bo))

// function Coo(){
//     this.name = 'coo'
// }

// Coo.prototype.age = '100'
// // Coo.__proto__.age = '200'
// var co = new Coo()


//set类数组

// var s = {name:'jack'}
// var w = new WeakSet([s,[3,4]]);
// console.log(w)  

// var m = new WeakMap();
// var mobj = {name:'jack'};
// m.set(mobj,1)

// console.log(m);
// mobj = null;

// console.log(m)
// var target = function(){console.log(111)}
// var p = new Proxy(target,{
//     get:function(target,property,f){
//         console.log(`${target} and ${property}`)
//         console.log(target,f,'22')
//         return target[property] 
//     },
//     //target为目标对象，property为目标属性 value为赋值
//     set:function(target,property,value){
//         console.log('set done')
//         console.log(target,property,value)
//         return target[property] = value
//     },
//     apply:function(target,that,arg){
//         //拦截函数的调用，call，apply操作
//         //target只能为函数
//         //target 目标函数，that 上下文this arg 传入的参数数组
//         console.log('apply')
//         // target(arg)
//     },
//     has:function(){},
//     construct:function(){},

// })

// p.name = 'jack'
// p()
// console.log(p.name)

//reflect

// console.log(Reflect)
var obj = {}
var _obj = new Proxy(obj,{
    set(t,k,v){
        console.log(t,k,v)
        return Reflect.set(t,k,v)
    }
})
_obj.name = 'jack'
console.log(_obj)
//Proxy {name:'jack'}

var a = {k:1,v:2,get add(){return this.k + this.v}}
var b = {k:4,v:5,set kv(value){return this.k = value}}

console.log(Reflect.get(a,'add',b))
console.log(Reflect.set(b,'kv',20000,a))
console.log(a,b)





var p = function(ad,tim){
    return new Promise(function(resolve,reject){
        // console.log(ad)
        setTimeout(() => {
            return resolve(ad)
        }, tim);
        
    })
}

// Promise.all([
//     p(100,1000),
//     p(200,4000),
//     p(300,8000)
// ]).then(res=>{
//     console.log(res,'ad')
//     // [100,200,300]
// }).catch(err=>{
//     console.log(err,'err')
// })
// Promise.race([
//     p(100,1000),
//     p(200,4000),
//     p(300,8000)
// ]).then(res=>{
//     console.log(res,'ad')
//     // 100
// }).catch(err=>{
//     console.log(err,'err')
// })


var p2 = function(ad){
    return new Promise(function(resolve,reject){
        console.log('1')
        return reject(22)    
    })
}
// Promise.prototype.done = function(ful,rej){
//     this.then(res=>{
//         console.log(res,'res')
//     }).catch(err=>{
//         console.log(err,'err')
//     })
// }

// Promise.prototype.finally = function(cb){
//     this.then(res=>{
//         cb()
//     }).catch(err=>[
//         cb()
//     ])
// }


function c (){
    console.log(111)
}

// Promise.try().then(res=>console.log(222))

var fu = {};
var F = function(f){
    this.name = f
}

Object.prototype.a='a';
Function.prototype.b = 'b'

console.log(fu.a)
console.log(fu.b)
console.log(F.a)
console.log(F.b)

var fff = new F('fff')

var  f = function(a){
    var obj = {};
        obj.__proto__ = F.prototype;
        F.call(obj,a)
        console.log(obj,'obj')
        return obj
}

// console.log(f('111'),fff)

var obj = {};
console.log(obj.prototype,obj.__proto__,Object)













