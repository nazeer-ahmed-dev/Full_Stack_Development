import { v4 as uuidv4 } from 'uuid';
const users = []

export const createUser = (req,res)=>{
    const user = req.body
    const userid= uuidv4()
 
    const userWid = {...user,id:userid}
     users.push(userWid)
 
     console.log("done")
 }

 export const getUser = (req,res)=>{

    
    const {id} = req.params
    //res.send(id)
    res.send(users.find((user) => user.id===id))
}

export const deleteUser = (req,res)=>{
    const {id} = req.params
    var index = users.map(x => {
        return x.id;
      }).indexOf(id);
      
      users.splice(index, 1);
      res.send(users)
}

export const updateUser = (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age} = req.body
    const user = users.find((users1)=>users1.id===id)
    if(firstName)  user.firstName  = firstName
    if(lastName)  user.lastName = lastName;
    if(age) user.age = age

    res.send("user updated")
}

export const main1 = (req,res)=>{
    console.log(users)
    res.send(users)
}
