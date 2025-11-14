"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const students_1 = __importDefault(require("./routers/students"));
const app = (0, express_1.default)();
const port = 3000;
/*
app.use((req,res,next) => {
//... validation or anything because this scope will start in any endpoint
//this is an custome middleware
})
*/
// for get all messages from body like json type
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(express_1.default.json());
mongoose_1.default
    .connect("mongodb://localhost:27017/students")
    .then(() => console.log("connected"));
app.use('/students', students_1.default);
app.listen(port, () => {
    console.log("running in port " + port);
});
//# sourceMappingURL=index.js.map