import mongoose from 'mongoose'
import Student from '../models/student.model.js'
const taskSchema=new mongoose.Schema({
    title:{
        required:[true,"task title is required"],
        type:String,
        maxLength:50,

    },
    description:{
        required:[true,"task description is required"],
        type:String,
        maxLength:500,
    },
    Student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student ",
        required:true,

    },
    status:{
        type:String,
        enum:["not assigned","assigned","completed","pending"],
        default:"not assigned"
    }


},{
    timestamps:true
})
const Task=mongoose.model("Task",taskSchema);
export default Task;