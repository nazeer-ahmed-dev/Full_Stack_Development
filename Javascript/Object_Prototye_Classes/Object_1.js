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
