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