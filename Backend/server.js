import express from "express"
import dotenv from "dotenv"
import connectDB from "./database/connection.js"
import userRouter from "./routes/user.routes.js"
import messageRouter from "./routes/message.route.js"
import cookieParser from "cookie-parser"
dotenv.config()
const app=express()

const PORT=process.env.PORT||8080
app.use(express.json())  // to parse the json file
app.use(cookieParser())  // to verify the token from cookie

app.use('/',userRouter)
app.use('/message',messageRouter)




app.listen(PORT,()=>{
    connectDB()
    console.log(`Server is running in port:${PORT}`)
})