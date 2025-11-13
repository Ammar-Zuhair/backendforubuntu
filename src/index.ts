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

// for get all messages from body like json type
app.use(express.json())

mongoose
    .connect("mongodb://localhost:27017/students")
    .then( () => console.log("connected"))



app.use('/students', studentRouter)


app.listen(port,()=>{
    console.log("running in port "+port)
})