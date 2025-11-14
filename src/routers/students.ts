import express  from "express";
import { studentModel } from "../models/student";

const router = express.Router();

router.get('/', async(req,res)=>{
    try {
        const students = await studentModel.find()
        res.status(200).send(students)
    } catch (error: any) {
        res.status(500).send({ error: error.message || 'فشل في جلب البيانات' });
    }
})
router.post('/', async(req,res)=>{
    try {
        const data = req.body;
        const newStudent = await studentModel.create(data);
        res.status(201).send(newStudent);
    } catch (error: any) {
        res.status(400).send({ error: error.message || 'فشل في إضافة الطالب' });
    }
})

router.put('/:id',async(req,res) => {
    try {
        const id = req.params.id;
        const data = req.body;

        // 'new' params makes you see data after update if you make it false you will see data before updates
        const student = await studentModel.findByIdAndUpdate(id,data,{new :true})

        if(!student){
            return res.status(404).send({ error: "User Not Found" })
        }
        // if want to return value make status 200 but if you wont return make it 204
        res.status(200).send(student)
    } catch (error: any) {
        res.status(400).send({ error: error.message || 'فشل في تحديث البيانات' });
    }
})
router.delete('/:id',async(req,res) => {
    try {
        const id = req.params.id;

        const student = await studentModel.findByIdAndDelete(id)

        if(!student){
            return res.status(404).send({ error: "User Not Found" })
        }
        res.status(200).send({ message: "تم الحذف بنجاح" })
    } catch (error: any) {
        res.status(500).send({ error: error.message || 'فشل في حذف الطالب' });
    }
})
export default router;