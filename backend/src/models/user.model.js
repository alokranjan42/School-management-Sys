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

userSchema.pre("save",async function(next){
    if(!this.isModified("Password")) return next();
    this.password=await bcrypt.hash(password,10)
    next();
})

userSchema.methods.matchPassword=function(password){
    return bcrypt.compare(password,this.password)
}

userSchema.method.generateAccessToken=function(){
    return jwt.sign({
        id:this._id

    },
    process.env.ACCESS_TOKEN_SECRET,
    {
     expiresIn:"15m"
    })
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
    {
        id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn:"7d"

    })
}

const User =mongoose.model("User",userSchema)
export  default User;