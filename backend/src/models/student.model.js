import mongoose from 'mongoose'
const studentSchema=new mongoose.Schema({
    roll:{
        required:[true,"student roll is required"],
        type:Number,
        trim:true,
        unqiue:true,
      
    },
    name:{
       required:true,
       type:String,
    },
    className:{
        required:[true,"className is required"],
        type:String,
        trim:true 
    }


},{timestamps:true})

const Student=mongoose.model("Student",studentSchema)
export default Student;