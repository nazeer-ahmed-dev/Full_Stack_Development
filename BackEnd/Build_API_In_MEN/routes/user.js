const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{            // All http methods can be used here with app.(get, put, post ,delete  , updated)
    res.send("WE are on post ")
})



router.get('/specific',(req,res)=>{            
    res.send("WE are on user specific ")
})

module.exports = router