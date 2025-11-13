import mongoose,{Schema, Document} from "mongoose";

interface IStudent extends Document{
    fullName:string;
    email: string;
    age: string;
    class: string;
}

const studentSchema:Schema = new Schema({
    fullName: {type: String, require: true},
    email: {type: String},
    age: {type: String},
    class: {type: String}
})
//its type is IStudent
// its collaction name students
// Schema is StudentSchema
export const studentModel = mongoose.model<IStudent>('students',studentSchema)