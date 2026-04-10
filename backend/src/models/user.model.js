import mongoose from 'mongoose'

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

const User =mongoose.model("User",userSchema)
export  default User;