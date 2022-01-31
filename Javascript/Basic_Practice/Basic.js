 /*
 Topics:
    1-Switch Statement
        - strict comparision
        - block level issue 
    2-for/in and for/of
        - for/in : > iterate over element of object (properties and methods)
                   > return key (property / method) name 
                   > object[key] return value
        -for/off : > iterates over values in array , string , etc
                   > return object for each iteration
        - break and continue statement
        - labeled statement
            goto a location of goto - > Note : dont recommended use of lables as this leads to spaghetti code
    3-Math, Comparison , and logical operators
    4-Exceptions , error types , data types
    5-this keyword
    6-Spread operator

 */
// Topic 1 : Switch Statment
function Swith_statment()
{
    let product = 2
    switch(product)
    {
        case 1 :
            console.log("product 1");
            break;
        case 2 : 
            console.log("Product 2")
            break;
        default:
            console.log("nothing")
            break;
    }
// Switch inside Switch

    let check = true
    switch(check)
    {
        case true:
                switch(check)
                {

                    case true:
                        console.log("done")
                    break;
                }
        break;
            
    }
// mulitple cases

    let color = "pink"

    switch (color) {
        case "pink":
        case "red":
            console.log("pink")
            break;
        default:
            console.log("defualt")
            
            break;
    }
    // block level issue in switch
    // In case statement same type of variable issue add bracket to make it local scope
let a = 2
switch (a) {
    case 2:
        {let message = "done"
        console.log(message)
        break;}
    case 3:
        {let message = "abc"
        break;}
    default:
        console.log("every thing is fine!!!")
        break;
}
}



// Topic 2 : For in and for off
function for_In_and_for_off()
{

    let product={
        "productId" : 24,
        "item " : 2,
        "name " : "LUX soap",
        "price " : 100,
        calculatePrice : function (){
            return  this["item "] * this["price "];
        }

    }

    // for/in on object
        for( const key in product)
        {
            console.log(" ' "+key+" ' = "+product[key]);
            
        }
        console.log(product.calculatePrice())

        let array = [
            {
                "productId" : 24,
                "item " : 2,
                "name " : "LUX soap",
                "price " : 100,
                calculatePrice : function (){
                    return  this["item "] * this["price "];}
            }
            ,
            {
                "productId" : 25,
                "item " : 2,
                "name " : "Dove soap",
                "price " : 100,
                calculatePrice : function (){
                    return  this["item "] * this["price "];}
            } 
            ,
            {
                "productId" : 26,
                "item " : 2,
                "name " : "olay soap",
                "price " : 100,
                calculatePrice : function (){
                    return  this["item "] * this["price "];}
            }              

        ];

    // for/of loop array
    for( const item of array)
    {
        console.log(JSON.stringify(item)); // convert javascript object to string, When sending data to a web server the data has to be string
    
    }
    // for/of looping on string (is an iterable object) - char by char
    var values = "hell iam nazeer ahmed"
    for(const item of values)
    {
        console.log(item)
    }
    //break and continue 
    for(const key in product)
    {
        if(product[key].item > 1)
        {
            break;
        }
    }
    // goto 
    even:
        for(let i=0; i<10;i++)
        {
            if(i%2==1)
            {
                continue even;
            }
            console.log(i)
        }
}
function Math_and_comparsion_operator()
{
    //Arthimatic operations
    let a = 2
    let b = 3
    console.log(2+3)
    console.log(2/3)
    console.log(2**3)
    console.log(2*3)
    // working with == and ===
    let number1=2
    var number2=3
    if(number1===number2)
    {
        console.log("both number and types are equall")
    } 

    // Ternary Operator 
    let value = "Nazeer"

    let result = value = "Nazeer" ? "Your are right" : " OH! your are wrong !!"; 
    console.log(result)
}
function use_strict()
{

    'use strict' // if your comment this without defining datatype it will work 
     let result = 10
     console.log(result)

     // delete result : cant use this 
}
function logica_operator_and_short_circuit()
{

    let result 
    let number = 10
    if( result = number > 5 )
    {
            console.log("Price is grater than 5 " + result)
    }

    // 

    color = null
    console.log("color = null"+Boolean(color))
    color = ""
    console.log("color = ''"+Boolean(color))
    color = undefined
    console.log("color = undefined "+Boolean(color))
    

    // logical operator

    let value = 100
    if(value > 30 && value < 150)
    {
        console.log("Right!!!!")
    }
    else if(value > 100)
    {
        console.log("Wrong value")
    }

    // short Circuit
    //1- short-circuit &&
    output = A("Red") && B(9); // this function will give error becuase B(9) never runs
    function A(val)
    {
            return value==="Red";
    }   
    function B(val)
    {
            return val < 10;
    }
    console.log(output)
    //2-Short-curcuit ||
    output = A("Red") || B(22);
    console.log(output)
    
    
}
function Exceptions_handling()
{
    // try catch
    function attempt()
    {
        let result ;
     try
     {
        console.log("An error will occur.")
        result=  x/10;
        console.log("this line will never run")
     }
     catch(error)
     {

        handleError(error)
        throw{
            "message": "custom error defined by user"+error.message,
            "name":"Custom error"
        };
     }
     finally
     {
         console.log("In the finally block !!!")
     }

    }
    
    // Custom Exception
    function throwError()
    {
        try{
            attempt();
            
        }
        catch(error)
        {
            console.log(error.message+" - Error TYpe : "+ error.name)

        }
    }
    throwError()

    // detetiong error and its type

    function handleError(error)
    {
        switch (error.name) {
            case 'ReferenceError':
                console.log("Ref error:  "+error.message);
                break;
            case 'RangeError':
                console.log("Range error:  "+error.message);
                break;
            case 'TypeError':
                console.log("Type error:  "+error.message);
                break;    
            default:
                console.log("Error Type: "+error.name+" Messageg "+error.message);
                break;
        }
    }

}
function Variable_and_datatypes()
{
    var x = 12345; 
    console.log(typeof x) // number
    x = 'string'; 
    console.log(typeof x) // string
    x = { key: 'value' };
    console.log(typeof x) // object

    // constructor samples
    let intrDate = new Date();
    let Stringval =  new String();

    console.log(intrDate.constructor.toString())

    console.log((intrDate instanceof Date).toString())
}




//Swith_statment();
//for_In_and_for_off();
//Math_and_comparsion_operator()
//use_strict()
//logica_operator_and_short_circuit()
//Exceptions_handling()
Variable_and_datatypes()