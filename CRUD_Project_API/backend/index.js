import  express  from "express";
import bodyParser from 'body-parser';
import userRoutes from "./routes/user.js";
import cors from 'cors'

const app = express();
const PORT = 5000

app.use(bodyParser.json())
app.use(cors())
app.use('/users',userRoutes)

app.get('/',(req,res) => {console.log("running");res.send("HELLO FROM HOMEPAGE")})



app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT :http://localhost/${PORT}`);
})