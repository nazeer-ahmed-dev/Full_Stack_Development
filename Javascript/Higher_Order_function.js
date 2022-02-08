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
    if(company1.category='retail')
    {
            return true;
    }
})