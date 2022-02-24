
const express = require('express')

const app = express()

const mongoos = require('mongoose')

const bodyParser = require('body-parser')

require('dotenv/config')
// //MiddleWares : hit function when http method call
// app.use('/posts', ()=>{
//     console.log("THis is middleware runnnig")
// })

app.use(bodyParser.json());

// import route
const postsRoute = require('./routes/posts')
const userRoute = require('./routes/user')



app.use('/posts',postsRoute) // using middlewere
app.use('/user',userRoute)

app.get('/',(req,res)=>{            
    res.send("WE are on Main")
})

// connect to DB

// .connect(process.env.DB_CONNECTION,()=>{
//     console.log("connect to DB")
// })
mongoos 
 .connect('"mongodb://cluster0-shard-00-00.gtdok.mongodb.net:27017,cluster0-shard-00-01.gtdok.mongodb.net:27017,cluster0-shard-00-02.gtdok.mongodb.net:27017/Cluster0?replicaSet=atlas-z088mg-shard-0" --ssl --authenticationDatabase admin --username Mongo-test --password Tharparkar2513', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

//Listening to servedr
app.listen(3000)
