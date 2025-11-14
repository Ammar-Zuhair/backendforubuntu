import mongoose, { Document } from "mongoose";
interface IStudent extends Document {
    fullName: string;
    email: string;
    age: string;
    class: string;
}
export declare const studentModel: mongoose.Model<IStudent, {}, {}, {}, mongoose.Document<unknown, {}, IStudent, {}, {}> & IStudent & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=student.d.ts.map