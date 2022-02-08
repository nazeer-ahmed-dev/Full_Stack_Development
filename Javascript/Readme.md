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
    6- Topics 
        - this
            > refer to an object in which current code is running
            > sometimes the object can be changed

            > Different Value based on execuation context
            > in a method owner object
            > in an function it refer to global object
            > In an event : element that received the event
            > call() / apply methods refers to object passed in 
            > 'use strict' also affect 'this'
        - how to change this
        - Global and function scope
        - event Handler
        - object literal 
        - call() / apply() methods
        - constructor function

    7-Spread operator
        - expand any 'iterable' such as string or array into array
        - for passing multiple arguments to method
        - uses the ellipsis symbol (...)
        - always on the righ-side of an equall sign
        - IE and Edge do not support spread operator



## 2 - Function
    - Function
        - reusable code
    - Arguments
    - Function and block scope 
        - the variable declared with the var keyword or within function declartions DO Not have block scope
    - Immediately Invoked function Expression (IIFE)
    - Closures
    - Arrow Function
        > ES6
        > Lemda Expression
        > side effect
            - behavior of this keyword
            - No arguments object
    - Function Context
    - Call method
        > use the call method when individual arguments of varying type
    - apply method
        > array input with similiar elements 
    - bind method
        > if we would like to make a copy of a function and then change the value of this then we use bind
    - Built-in function  
        > Eval
        > ParseInt
        > escape
        > enscape
    - Rest paramets and spread operator
        > Default Parameter
        > Rest Parametes ...
    

## 3 - Module
    - importing and exporting keyword
    - Encapsulate code
    - control access
    - reference ts own depedencies

    - Modules are singleton : need to import as well as export
    - properties are bound :  exported are not just value they're pointer or binding to the properties
    - export are static : can't change later at run time
    - one module per file : request on at a time for HTTP (request)
## 4 - Object , Prototype and Classes
    - Object 
        > 3 ways  : object literal , constructor function and classes
        > object Equality
        > Merging propertieds
        > Immutability
        > Object.is() : Less common, Like === except for a few mathematical difference
        > Object.create() : also way to create object
    - object properties
        >  value
        > Writable
        > enumerable
        > configurable
        > get and set
        > every function in javascript has a prototype property
    - Prototype
        > Function Prototype : a function's prototype is the object instanace that will become the prototye for all objects created using this function as a constructor
        > object Prototype : An object's prototype is the object instance from which the object is inherited
    - Built-in object
        -regx
## 5 - DOM Manipulation
    - DOM : Document Object model
    - https://www.w3schools.com/js/js_htmldom.asp
## 5 - Promises and Async Programming
    - 
