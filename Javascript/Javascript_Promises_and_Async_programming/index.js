/*
1) call back pyramid of Doom (problem)
    > A common problem that arises when a program uses many levels of nested indentation to control 
    access to a function.

2) Promises
    > object that represents the eventual completion (or failure) of an asynchrounous operation, 
    and its resulting value
    > 3-states
        1) Pending
        2) Fulfilled
        3) Rejected

        - settled  : promises is no longer pending
        - Resolved : promises is no longer pending

*/

// why we use Promises 
function getDate()
{
    setTimeout(()=>{
        return 2;
    },2000)
}
function getMoreData(x)
{
    setTimeout(()=>{return 3+x},3000)
}
function printSum(a,b)
{
    return a+b;
}

let x = getDate()
let y = getMoreData(x)
console.log("sum is : "+printSum(x,y));  // sum will be NaN because getData and getMore data or delayed due to settimeout

const post = [
        {title:"one",body:"This is post one"},
        {title:"two",body:"This is post two"},
];

// working wit callback function : first function then another function
function _getData()
{

    setTimeout(()=>{
         output= post.forEach((post1,index)=>{
                console.log(post1.title)
        })

    },1000)
  
}
// making _getData as callback function
function ceratePost(post1,callback)
{
    setTimeout(()=>{
        post.push(post1);
        callback();
    },2000)
}

//_getData()
ceratePost({title:'three',body:"this is post 3"},_getData)

// Promises
function ceratePost1(post1)
{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            post.push(post1);
            const error = false

            if(!error)
            {
                    reslove();
            }
            else{
                reject("Eror : Something went Wrong");
            }
            
        },2000)
    })
    
}

ceratePost1({title:"four",body:"this is four post"}).then(_getData()).catch(err=>console.log(err));

// promises.all
const promise1 = Promise.resolve("Hello");
const promise2 = 2;
const promise3 = new Promise((reslove,reject)=>{
    setTimeout(reslove,2000,'GoodBye')
})

Promise.all([promise1,promise2,promise3]).then((value)=>{
    console.log(value)}).then(erro=>console.log(erro))