person_1 = {
    firstName : "Nazeer",
    lastName : "Ahmed"
}

console.log(person_1.firstName)
//adding function in object

person_1.age = 20
person_1.isAdult = function(){
    return this.age > 18
}

console.log(person_1.isAdult())

// Object literal property shorthand
function registerUser(firstname,lastname)
{
    let person_2= {
        firstName : firstname,
        lastName : lastname
    }
    let person_3= {
        firstname,
       lastname
    }

    let person_4 = {
        DOB:"11/11/1111"
    }

    console.log(Object.keys(person_2))
    //loop on object : for/in
    for(let key in person_3)
    {
        console.log(person_3[key])
    }

    Object.assign(person_3,person_4) // person3 object will be modify 
    Object.assign({},person_3,person_4) // person3 and 4 reamain same
    console.log(person_3)
}
registerUser("nazeer","ahmed")

// if there are 10 user and we want to calculate the isAdult() then instead of making 10 object we can make constructor funcdtion

function Person(firstName,lastName,age)
{
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.isAdult = function()
    {
        return this.age > 21;
    }
}

let nazeer = new Person("nazeer","ahmed",20); 
let umair = new Person("umair","ahmeed",22)

console.log(nazeer)


// properties of object
let object_properties = {
     firstName : "Nazeer",
     lastName : "Ahmed",
     desc : {city : "mithi"},
     age  : 20,
     isAdult : function (){
        return (this.age>20);
    }
}

// using bracket notation
console.log(object_properties['firstName'])
object_properties['hairColor'] = "brown"

//modifying object properties
Object.defineProperty(object_properties,'firstName',{writable : false})
//if you change name it will not modify
    // object_properties.firstName = "nazeerahmed" : gives error here
// getting property Description
// if your desc.city then it will change but desc will not change if its writable property is false
console.log(Object.getOwnPropertyDescriptor(object_properties,'firstName'))

// enumrable property
Object.defineProperty(object_properties,'firstName',{enumerable : false})
for (let key in object_properties)
{
    console.log(object_properties[key]) // name will not print b/c its enumrable property is false
}


// getter and setter 
Object.defineProperty(object_properties,'fullname',{
    get : function(){
        return this.firstName + " "+this.lastName
    },
    set : function(value){
        var namePart =  value.split(' ');
        this.firstName = namePart[0];
        this.lastName = namePart[1];
    }
})
console.log(object_properties.fullname)
console.log(object_properties.fullname)