let myFunction = function()
{
    console.log(myFunction.prototype)
    
    let person = {firstName : "Nazeer"};
    console.log(person.prototype);
    console.log(person.__proto__)

}

function Person(fName,lName)
{
    this.fName = fName;
    this.lName =  lName;
}

Person.prototype.age = 23 // it will change the age of both objecdt
//nazeer.age  = 20 // online nazeer object age will be change
console.log(Person.prototype)
let nazeer = new Person("nazeer ", "ahmed")
let umair = new Person("umair ", "ahmed")
console.log(nazeer.__proto__)


// changing a function Prototype
function change_prototype(fullname)
{
    this.fullname = fullname;
}
change_prototype.age = 29;

let nazeer_1 = new change_prototype("nazeer Ahmed")
let umair_1= new change_prototype("umair ahmed")
change_prototype.prototype ={ age:18}
console.log(nazeer_1.age)
console.log(change_prototype.prototype)
console.log(umair_1.age)