import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app=express();
 app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


import authRouter  from './routes/auth.routes.js'
import taskRouter from './routes/task.routes.js'
import studentRouter from './routes/student.routes.js'


app.use("/api/auth",authRouter)
app.use("/api/task",taskRouter)
app.use("/api/students",studentRouter)


export {app}