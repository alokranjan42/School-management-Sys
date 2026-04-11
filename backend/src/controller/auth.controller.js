import User from '../models/user.model.js'
import asyncHandler from '../utils/AsyncHandler.js'
import ApiError from '../utils/ApiError.js'
import ApiResponse from '../utils/ApiResponse.js'




const registerUser=asyncHandler(async(req,res)=>{
    //get details from frontend check for all fields
    const{name,email,password}=req.body

    if(!name||!email||!password){
    throw new ApiError(400,"details  required for registraion")
    }
    //check for is already user registered
    const existedUser=await User.findOne({email})
    if(existedUser){
        throw new ApiError(409,"user already exists")
    }

    const user=await User.create({
        name,
        email,
        password

    })
//remove password 
    const createdUser=await User.findById(user._id).select("-password")
    if(!createdUser){
        throw new ApiError(500,"something went wrong:user not created")
    }
    const accessToken=user.generateAccessToken();
    const refreshToken=user.generateRefreshToken();
    
    return res.status(201)
    .cookie("accessToken",accessToken,{
        httpOnly:true,
        secure:true
    })
    .cookie("refreshToken",refreshToken,{
        httpOnly:true,
        secure:true
    })
    .json(new ApiResponse(201,"user registered ",createdUser))

})

const loginUser=asyncHandler(async(req,res)=>{
    //get the login details from frontend
    const {email,password}=req.body
    if(!email||!password){
        throw new ApiError(409,"missing login  details")
    }
    //check user exists or not 
    const userExists=await User.findOne({email})
    if(!userExists){
        throw new ApiError(404,"user not found")
    }
    //check passsword is correct or not 
    const checkPassword=await userExists.matchPassword(password)
    if(!checkPassword){
         throw new ApiError(401,"incorrect password")
    }

    const accessToken= userExists.generateAccessToken()
    const refreshToken=userExists.generateRefreshToken()

        return res.status(200)
        .cookie("accessToken",accessToken,{
            httpOnly:true,
            secure:true
        })
        .cookie("refreshToken",refreshToken,{
            httpOnly:true,
            secure:true
        })
        .json(new ApiResponse(200,"login successful",userExists))
})



const logout=asyncHandler(async(req,res)=>{
    return res.status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(new ApiResponse(200,"user logout successfully",null))
})
export {
    registerUser,
     loginUser,
     logout


}