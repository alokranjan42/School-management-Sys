import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:["Admin name is required",true],
        lowerCase:true,
    },
    email:{
        type:String,
        required:["email is required",true],
        lowerCase:true,
        unique:true,
        trim:true,
        match:[/^\S+@\S+\.\S+$/,"email is required for signup"],
    },
    password:{
        type:String,
        required:true,
        minLength:[6,"minimum 6 length required"]
    }


},{timestamps:true});

 userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword=function(password){
    return bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign({
        _id:this._id

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
     expiresIn:"15m"
    })
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
    {
        _id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:"7d"

    })
}

const User =mongoose.model("User",userSchema)
export  default User;