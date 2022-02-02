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
message.regularFunction()
message.arroFunction()

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
console.log(sum(1,2))