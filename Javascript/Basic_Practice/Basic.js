 /*
 Topics:
    1-Switch Statement
    2-for/in and for/of
    3-Math, Comparison , and logical operators
    4-Exceptions , error types , data types
    5-this keyword
    6-Spread operator

 */
// Switch Statment
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





// calling Swith_statment
Swith_statment();