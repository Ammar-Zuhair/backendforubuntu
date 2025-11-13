import express  from "express";
import { studentModel } from "../models/student";

const router = express.Router();

router.get('/', async(req,res)=>{
    /*const student = new studentModel({fullName: "Ammar",email: "pro@gmail.com"});
    student.save();
    res.send("Hello world")*/
    const students = await studentModel.find()
    res.status(200).send(students)
})
router.post('/', async(req,res)=>{
    
    const data = req.body;
    const newStudent = await studentModel.create(data)
    newStudent.save();
    res.status(201).send(newStudent)
})

router.put('/:id',async(req,res) => {
    const id = req.params.id;
    const data = req.body;

    // 'new' params makes you see data after update if you make it false you will see data before updates
    const student = await studentModel.findByIdAndUpdate(id,data,{new :true})

    if(!student){
        return res.status(404).send("User Not Found")
    }
    // if want to return value make status 200 but if you wont return make it 204
    res.status(204).send(student)
    
    
})
router.delete('/:id',async(req,res) => {
    const id = req.params.id;

    // 'new' params makes you see data after update if you make it false you will see data before updates
    const student = await studentModel.findByIdAndDelete(id)

    if(!student){
        return res.status(404).send("User Not Found")
    }
    res.status(204).send("Okay")
    
    
})
export default router;