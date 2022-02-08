const companies = 
[
    {name:"one", category:"finance",start:1981,end:2003},
    {name:"two", category:"retail",start:1992,end:2008},
    {name:"three", category:"Auto",start:1999,end:2014},
    {name:"four", category:"Retail",start:2009,end:1996},
    {name:"five", category:"Technology",start:2011,end:2016},
    {name:"six", category:"Auto",start:1981,end:1989},
]

const ages = [33,12,20,16,5,5,21,44]

// for loop
for(let i=0;i<companies.length;i++)
{
    console.log(companies[i])
}
//forEach : synchronious call
companies.forEach((company)=>{
        console.log(company)
})

// filter
let canDrive = []
// comparing b/w for loop and filter

for(let i=0;i<ages.length;i++)
{
    if(ages[i]>=20)
    {
        canDrive.push(ages[i]);
    }
}

// filter

const canDrive1 = ages.filter((age)=>{
        if(age>=21)
        {
                return true;
        }
})
console.log(canDrive1)

// filter on companies : retial comp

const retialComp = companies.filter((company1)=>{
    if(company1.category=='retail')
    {
            return true;
    }
})
console.log(retialComp)
// another way
const retialComp1 = companies.filter(company=> company.category=='retail');
console.log(retialComp1)

//get 80s company
const eightiesComp = companies.filter(comp => (comp.start>=1980 && comp.start<1990))


//Map
// create array of company name
const CompName = companies.map(comp=>{return comp.name})
console.log(CompName)

// company Names with year
const testMap = companies.map((comp)=>{
        return `${comp.name} [${comp.start} - ${comp.end}]`
})
console.log(testMap)

// example
const ageSqure = ages.map(age=>Math.sqrt(age)).map(age=> age*2);
console.log(ageSqure)

// sort

const sortedCompanies = companies.sort((c1,c2)=>{
    if(c1.start > c2.start)
    {
        return 1;
    }
    else{
        return -1
    }
})

//shorter form
const sortedCompanies1 = companies.sort((a,b)=>(a.start > b.start ? 1 : -1))
console.log(sortedCompanies1)

// sorting age 
const sortAge = ages.sort((a,b)=> a - b);
console.log(sortAge)

// reduce vs for
let ageSum =0
for(let i=0;i<ages.length;i++)
{
    ageSum +=ages[i];
}
console.log(ageSum)

const ageSum1 = ages.reduce((total,age)=>{
    return total+age;
},0)

// get Total year for all companies
const total_year = companies.reduce((total,comp)=>{
        return total  + (comp.end-comp.start)
},0)
console.log(total_year)
//done