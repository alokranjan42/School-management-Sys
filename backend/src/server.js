import {app} from './app.js'
import dotenv from 'dotenv'
import dbConnect from './db/db.js'


const PORT=3005
dotenv.config()
dbConnect()
.then(()=>{
    app.listen(PORT||process.env.PORT,()=>{
        console.log(`server is running on port :${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("error occured while running server",error);
})