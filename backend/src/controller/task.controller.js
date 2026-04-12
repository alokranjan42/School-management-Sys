import Task from '../models/task.model.js'
import asyncHandler from '../utils/AsyncHandler.js'
import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'


const createTask=asyncHandler(async(req,res)=>{

    //req data from frontend
    const {title,description,status,studentId}=req.body
    if(!title||!description||!status ||!studentId){
        throw new ApiError(400,"missing details to create Task")
    }
    //if data come from frontend then create a task
    const task=await Task.create({
        title,
        description,
        status,
        student:studentId,
        createdBy:req.user._id

    })

    return res.status(201)
    .json(new ApiResponse(201,"Task created successfully",task))
}) 
const getTaskById=asyncHandler(async(req,res)=>{
    //getting id from url and finding according to id
    const {id}=req.params
    const task=await Task.findById(id)
    if(!task){
        throw new ApiError(404,"task not found")
    }
    return res.status(200)
    .json(new ApiResponse(200,"task found",task))
})

const getTask=asyncHandler(async(req,res)=>{
    //find all task 
    const task=await Task.find({}).populate("assignedTo")
    return res.status(200)
    .json(new ApiResponse(200,"here are Tasks",task))
})
const updateTask=asyncHandler(async(req,res)=>{

    //find id from url and take data from frontend and update 
    const {id}=req.params
    const {title,description,status}=req.body
    
    if(title === undefined && description === undefined && status  === undefined){
        throw new ApiError(400,"missing details for update ")
    }
    const task=await Task.findById(id)
    if(!task){
        throw new ApiError(404,"Task not found")
    }
//update only frontend  defined fields data  
    if(title!==undefined) task.title=title
    if (description!==undefined) task.description=description
    if(status!==undefined) task.status=status

     await task.save();
     return res.status(200)
     .json(new ApiResponse(200,"task updated successfully",task))
})
const taskCompleted=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const completedtask=await Task.findById(id)
    if(!completedtask){
        throw new ApiError(404,"task not found")
    }
     completedtask.status = "completed";
     await completedtask.save();

     return res.status(200)
     .json(new ApiResponse(200,"Task completed",completedtask))
})
const deleteTask=asyncHandler(async(req,res)=>{

    //get id from url and find task and delete 
    const {id}=req.params
    const task=await Task.findByIdAndDelete(id)
    if(!task){
        throw new ApiError(404,"task not found")
    }

    return res.status(200)
    .json(new ApiResponse(200,"task deleted successfully"))

})

export {
    createTask,
     getTask,
     updateTask,
     deleteTask,
     getTaskById,
     taskCompleted
}