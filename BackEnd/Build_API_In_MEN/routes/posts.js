    const express = require('express')

    const router = express.Router()
    const Post = require('../model/Post')

    router.get('/',(req,res)=>{            // All http methods can be used here with app.(get, put, post ,delete  , updated)
        res.send("WE are on post ")
    })
    
    router.get('/specific',(req,res)=>{            
        res.send("WE are on specifc ")
    })
    

    router.post('/',(req,res)=>{

        const post = new Post({
                title:req.body.title,
                description:req.body.description
        });

        console.log(post)
        post.save()
        .then(data => {

            console.log(data)
            res.json(data);

        }).catch(err => {
            console.log(err)
            res.json({message : err})
        })

        console.log("here")
        // const post = new Post(
        //     {
        //             title:req.body.title,
        //             description: body.description,
        //     }
        // );

        // post.save().then(data => {
        //     res.json(data);
        // }).catch(err => {
        //     res.json({message : err})
        // });
    });


    module.exports = router