import express from "express"
import mongoose from "mongoose";
import studentRouter from './routers/students'

const app = express();
const port = 3000;


/*
app.use((req,res,next) => {
//... validation or anything because this scope will start in any endpoint
//this is an custome middleware
})
*/

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});
app.use(express.json())

mongoose
    .connect("mongodb://localhost:27017/students")
    .then( () => console.log("connected"))



app.use('/students', studentRouter)


app.listen(port,()=>{
    console.log("running in port "+port)
})