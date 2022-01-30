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
// calling Swith_statment
Swith_statment();
//calling for_In_and_for_off
for_In_and_for_off();