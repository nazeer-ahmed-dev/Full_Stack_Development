import express from 'express';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

const users = [
    
]

// all routes in here are starting with / users
router.get('/',(req,res)=>{
    console.log(users)
    res.send(users)
})

// adding data
router.post('/',(req,res)=>{
   const user = req.body
   const userid= uuidv4()

   const userWid = {...user,id:userid}
    users.push(userWid)

    res.send("User added")
})

router.get('/:id',(req,res)=>{

    
    const {id} = req.params
    //res.send(id)
    res.send(users.find((user) => user.id===id))
})


router.delete('/:id',(req,res)=>{
    const {id} = req.params
    var index = users.map(x => {
        return x.id;
      }).indexOf(id);
      
      users.splice(index, 1);
      res.send(users)
})
export default router;