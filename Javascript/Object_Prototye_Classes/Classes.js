class Person{
    constructor(fName,lName,age)
    {
            this.fName = fName;
            this.lName = lName;
            this.age  =age;
            this.city ="mithi"
    }
    get fullName() // its in prototype
    {
        return this.fName+' '+this.lName;
    }
    set fullName(fullname) // its in prototype
    {
            let name = fullname.split(' ')
            this.fName = name[0];
            this.lName = name[1];
    }
    isAdult()
    {
        return this.age >= 20
    }
}

class Student extends Person
{
        constructor(fName,lName,age)
        {
            this.enrol = []
        }
        enrolment(id)
        {
            this.enrol.push(id)
        }
}
Object.defineProperty(Person.prototype,'fullName',{enumerable : true})
let nazeer = new Person('Nazeer','Ahmed',21)
console.log(nazeer)