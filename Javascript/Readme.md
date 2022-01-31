# Topics Covered 

## 1 - JavaScript Syntax and Operators
#### Topics:
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
        - operators(+,-,/,*,%,++,--**)
        - plus sign with Strings and Number
        - Math
        - Assignment operator(=,+=,-=,%=,/=,*=,**=)
        - Comparison
            1) > Greater than   2) < less than  3) >= Greater than or equall
            **4) == Equal in value    5) === Equall in value and type**
        - 'use strict' functionality
            > YOur should always being using 
            > ignore  by older browser 
            > force all variable to be decluare
            > Mistyped variable names are created globally scoped
            > Some rules
                - can't use reserved words as  a variable
                - can't delete variable
                - can't deleter function
    4- working with Logical operators and short-circuit Evaluation
        - Truthy and Falsy
            > Any Variable with a value ("nazeer" ,10 ) or Boolean true is true
            > Any variable = false, null , undefined ,NaN, "" is false
        - Logical Operators (&& , || , !)
        - Short Circuiting
            > Optimization for logical expression
            > By passsing subsequent expression in && or || based on truthy and falsy
        - operator precedence
            1) Grouping (())
            2) Not (!)
            3) Multiplication (*)
            4) Division (/)
            5) Modules (%
            6) Addition (+)
            7) Substraction (-)
            8) less than (<)
            9) less than or equall (<=)
            10) Greater than (>)
            11) Greater than or equall (>=)
            12) Equall (=)
            13) Not equal (!=)
            14) Strict equall (===)
            15) strict not equall (!==)
            15) And (&&)
            16) or (||)
            17) Assignment
    5-Exceptions Handling
        - Handling Exception
            > try--catch
            > finally statement
        - Throw a custom exception
            > can throw your own custom error
            > create an object with at least two properties  : "message" and "name"
        - check for type of error
            1) Reference Error
            2) RangeError
            3) TypeError
            4) URIError
            5) Syntax Error
            6) EvalError* : backwards compatibility only: its's not use more
    6-Variable and Dataypes
        - Datatypes
            > Primitives
                1) Booleaan
                2) null
                3) undefined
                4) number
                5) string
            > Object 
                6) new Array
                7) new Error
                8) new Function : a block of code
                9) new Object : a wrapper around any type
                10) new RegExp
                11) new Bolean
                12) new Number 
                13) new String
        - Determine typeof operator
            > typeof operator
                - Returns the data type of the passsed in expression
                - A String value is returned such as 'string','number','object'
            > costructor property or object datatypes
                - All object data types inherit from object (not primtives)
                - object has constructor property
                - Returns a reference to the object itself
            > instanceof operator
                - test if inherits from object(not a primitive)
    6-this keyword
    7-Spread operator


