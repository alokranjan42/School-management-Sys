import asyncHandler from "../utils/AsyncHandler.js";
import ApiError from '../utils/ApiError.js'
import User from "../models/user.model.js";

const authMiddleware=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.accessToken
    if(!token){
        throw new ApiError(404,"token not found");
    }
    const decodedToken=await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    if(!decodedToken){
        throw new ApiError(404,"decodedToken not found")
    }
    const user=await User.findById(decodedToken._id)
    if(!user){
        throw new ApiError(404,"user not exist")
    }
    req.user=user;
    next();
})

export default  authMiddleware