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