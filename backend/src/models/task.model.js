import mongoose from 'mongoose'
import Student from '../models/student.model.js'
import User from './user.model.js';
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
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true,

    },
    status:{
        type:String,
        enum:["not assigned","assigned","completed","pending"],
        default:"not assigned"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
      


},{
    timestamps:true
})
const Task=mongoose.model("Task",taskSchema);
export default Task;