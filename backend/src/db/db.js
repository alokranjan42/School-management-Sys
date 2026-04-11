import mongoose from 'mongoose'

const dbConnect=async()=>{
    try {
        const connection=await mongoose.connect(`${process.env.MONOGO_URI}`);
        console.log( `db connected on : ${connection.connection.host}`);
        
    } catch (error) {
        console.log("error occured while connecting db",error.message);
        process.exit(1);
        
    }

}

export default dbConnect