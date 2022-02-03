function greeting()
{
    console.log("welcome to function")
}
// argument
function _arguments(a,b,c,d)
{
    console.log(a)
}
function argument_object()
{
        for(let i=0;arguments.length;i++)
        {
          console.log(arguments[i])            
        }
}
function nested_function()
{
    let message = "Hello"
    let sayHi = function hi()
    {
        console.log(message)
    }
    sayHi()
}
//  Block Scope
function block_scope()
{
    let message = "hello"
    if(message=="hello")
    {
        let a = 20;
        var c = 10;
    }
   // console.log(a) : ref  error
    console.log(c) // print 10 : var no longer have block scope
}
// closure 
function Problem_in_closure()
{
    let greeting = (function (){

        let message = 'hello'
        let getmessge = function (){
           return message;
        };
    })();

    console.log(greeting.message) // undefined
}
function closure()
{
    let greeting = (function (){

        let message = 'hello'
        let getmessge = function (){
           return message;
        };
        return { getMessage : getmessge}
    })();

    console.log(greeting.getMessage()) // undefined
}
//Regular function 1
let func_1 = function()
{
    return 'hello';
}

// Regular function2
let greet = function greeting_1()
{
    return 'hello' + 'nazeer';
}
// arrow function 1
let func_2 = ()=>{
    return "hello"
}
let func_2_1 = ()=> 'hello'

//arrow function 2
let fun_2_arrow = name => ' hello '+name;

// sum using arrow function
let sum = (num1,num2) => {
    return num1+num2
}

// behavior of this keyword in arrow function
let message = {
    name:'nazeer',
    regularFunction: function()
    {
        console.log("hello "+this.name)
    },
    arroFunction : ()=>console.log('hi'+this.name)
}
// message.regularFunction()
// message.arroFunction()

// function context
let gret = {}
gret.say = function()
{
    console.log('hi')
    console.log(this) // no longer to global window
}

//gret.say()


// call method
let person1 = {name:"nazeer", age:21}
let person2 = {name:"umiar", age:21}

let call_function = function()
{
    console.log('Hi '+this.name)
}
call_function.call(person1)
call_function.call(person2)

// apply method and call method

function introduction(name,profession)
{
    console.log("My name is "+name+" and iam a "+profession)
}

introduction("nazeer","Full stack Developer")

introduction.apply(undefined,["abc","def","aaa"])
introduction.call(undefined,"abc","def","aaa")

//bind function
let person1_1 ={

    name:"nazeer",
    getName:function()
    {
        return this.name;
    }
};

let person2_1={
    name : "Ahmed"
}

let getNameCopy = person1_1.getName.bind(person2_1)
console.log(getNameCopy())


// built-in Function
//1: eval : accept string as a input
let x=1
let y=2
let z="abc"
console.log(eval('x+y+1'))  // output : 4
console.log(eval('x+y+z'))  // output : 3abc

//2- parseInt
console.log(parseInt('F',16)) // return the value of F base 16
console.log(parseInt('15',10)) // 15
console.log(parseInt('hi',10)) // NaN 

//3- escape : return the hexa-decimal encoding
console.log(escape('text')) // text


// Default Parameters
function syName(name="nazeer")
{
    console.log("Hello "+name)

}
syName()
syName("ahmed")

//rest parameters
let sayNmae = function greet(...name)
{
    name.forEach(name => console.log('Hi  '+name))
}
greet("nazeer","ahmed")

// spread operator
function _spread(person1,person2)
{
    console.log("hello "+person1+" and "+person2)

}
let name = ["nazeer","ahmed"]
_spread(...name)










//_arguments()
//argument_object(1,2,3,4)
//nested_function()
//block_scope()
//Problem_in_closure()
//closure()
/////////////
    //let message = func_1()
    //console.log(message)
// ////////////
// greet()
// console.log(fun_2_arrow("nazeer"))
//console.log(sum(1,2))
