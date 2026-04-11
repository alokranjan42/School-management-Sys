import asyncHandler from "../utils/AsyncHandler.js";
import ApiResponse from "../utils/ApiRespone.js";
import ApiError from "../utils/ApiError.js";
import Student from '../models/student.model.js'


const registerStudent=asyncHandler(async(req,res)=>{
    //get data from fronted and register student if it not exists
    const {roll,name,className}=req.body
    if(!roll||!name||!className){
        throw new ApiError(400,"missing student details")
    }
    const StudentExist=await Student.findOne({roll})
    //check already student exists or not 
    if(StudentExist){
        throw new ApiError( 409,"student already registered")
    }

    const student=await Student.create({
        roll,
        name,
        className

    })
    return res.status(201)
    .json(new ApiResponse(201,"student added successfully",student))

})

const getStudents=asyncHandler(async(req,res)=>{
    //find all registered  students 
    const students=await Student.find({})
    return res.status(200)
    .json(new ApiResponse(200,"All Students are ..",students))
})
const updateStudent=asyncHandler(async(req,res)=>{
    //find id from url and update students fields
    const {id}=req.params
    const {name,roll,className}=req.body
    if(roll===undefined && name ===undefined && className===undefined){
        throw new ApiError(400," details required to update Details")
    }
    const student=await Student.findById(id)
    if(!student){
        throw new ApiError(404,"student not found")
    }

    //update only frontend fields data 
    if(roll!==undefined) student.roll=roll
    if(name!==undefined) student.name=name
    if(className!==undefined) student.className=className
    await student.save();


    return res.status(200)
    .json(new ApiResponse (200,"student updated successful",student))
    
})

const deleteStudent=asyncHandler(async(req,res)=>{
    //find student id and delete student
    const {id}=req.params
    const deleteStudent=await Student.findByIdAndDelete(id)
    if(!deleteStudent){
        throw new ApiError(404,"student not exists")
    }

    return res.status(200)
    .json(new ApiResponse(200,"Student removed ",null))
})

export {
    getStudents,
     registerStudent,
     updateStudent,
     deleteStudent
}
