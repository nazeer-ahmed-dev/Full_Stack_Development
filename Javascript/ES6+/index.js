//String Literal : using backtick 
    let firstName = 'Nazeer';
    let lastName = "Ahmed"

    const fullName  = `${firstName} ${lastName}`;
    console.log(fullName)

    // space using String Literal

    let  fullName_1 = `${firstName}
        ${lastName}
        `;
    console.log(fullName_1)
    
// Destructuring Object
const player = {
    name : 'Nazeer ahmed',
    address : {
        city : 'mithi',
        street : 'abc'
    },
    qulification : 'Bachelor'
}
const {name,qulification,address:{city}} = player
console.log(`${name} has done ${qulification} and he live in  ${city}`)

//Destructuring Array
let [fName,lName] =  ['Nazeer','ahmed'];
lName = "Ahmed"
console.log(firstName + " "+lastName)

//Object Literal
function addressMaker(city,state)
{
    const newAddress = {city,state};
    console.log(newAddress);
}
addressMaker('Mithi','Mithi_1')

// example of object literal
function addressMaker_1(address)
{
    const { city, state} = address; // By chaning name of city and state you will get undefined
    const newAddress_1 = {

        city,state,
        country : 'Pakistan'
    }
    console.log(newAddress_1)
}
addressMaker_1({city:'Mithi',state:'MithI_1'})

// For/of Loop
let incomes = [1232,2324,3535];
let total = 0;

for (const income in incomes)
{
    total += income;
}
console.log(total)
// example of for/of loop
let fullName_2 = "Nazeer ahmed"
for(const char of fullName_2)
{
    console.log(char)
}
//example 2

const student =[
    {name:'Nazeer',city:'Mithi'},
    {name:'Umair',city:'Ratodero'}
];

for(const std of student)
{
    console.log(std)
    for(const data in std)
    {
        console.log(std[data])
    }
}

// spread operator on array
let contacts = ["Nazeer","umair","Haseeb"]

let personalFriend = contacts
contacts.push("ahmed") // it walo also reflect the personalFriend 
let personalFriend_1 = [...contacts]
contacts.push("qudoos")
console.log(contacts)
console.log(personalFriend)
console.log(personalFriend_1)

//example
let array = [...personalFriend,"add1"]
console.log(array)

// spread operator on object
 let product=[{
    "productId" : 24,
    "item " : 2,
    "name" : "LUX soap",
    "price " : 100,
    calculatePrice : function (){
        return (this["item "]-this["price "]);
    }
}]
const product2 = {...product[0]}

product2.name = "CHNAGE"
console.log(product)
console.log(product2)

// Rest Operator
function add(...nums)
{
    console.log(nums)
}
add(1,2,3,4)

// arrow function
let func_1 = () =>{
    return "Hello , Your are Learning ES6"
}
console.log(func_1());

let func_2 = (a,b)=>{
    return a+b;
}
console.log(func_2(2,3))

const func_3 = () => 'Hi , this is ES6+'

//Default params
const leadSinger = (artist = "nazeer") =>{
    console.log(`${artist} Chris Martinis the lead singer of cold play`)
}
leadSinger("ahmed");

// includes()
let numArray = [1,2,3,4];
console.log(numArray.indexOf(0)) // return -1
console.log(numArray.includes(0)) // return boolean
console.log(numArray.includes(2)) // return boolean

//let and const , let : is the structure version of var which uses the block scope
if(true)
{
    var example = 5
    let example1 = 19
}
console.log(example) // its accessible here
//console.log(example1) // refernce error

const ex = 10;
//ex = 20  :can change
console.log(ex)

const arr = []
arr.push(2)
console.log(arr)

// padStart() and padEnd()
let pad_string = 'Nazeer '
console.log(pad_string.padStart(10,'a'))
console.log(pad_string.padEnd(10,'a'))
