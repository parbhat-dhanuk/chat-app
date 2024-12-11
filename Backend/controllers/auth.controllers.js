import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup=async(req,res)=>{
    try {
       const {fullName,username,password,confirmPassword,gender}=req.body 

       if(password!==confirmPassword){
        return res.status(400).json({message:"**password and confirm password don't match**"})
       }

       const user=await User.findOne({username})

       if(user){
        return res.status(400).json({message:"**Username already exists**"})
       }

       //Hash password 
       const hashPassword=await bcrypt.hash(password,10)

       const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
       const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

       const newUser=await User.create({
        fullName,
        username,
        password:hashPassword,
        gender,
        profilePic:gender==="male" ? boyProfilePic : girlProfilePic
       })

       res.status(201).json({
        message:"user created successfully",
        data:newUser
       })

    } catch (error) {
        console.log("Error in signup controller",error.message)
        res.status(500).json({error:`Internal server error`})
    }
}



export const login=async(req,res)=>{
  
    try {
        const {username,password}=req.body
        
        const user=await User.findOne({username})

        if(!user){
            return res.status(400).json({message:"**Invalid username**"})
        }
      
        const isPasswordMatch=await bcrypt.compare(password,user?.password)
        if(!isPasswordMatch){
            return res.status(400).json({error:"**Invalid password**"})
        }

        const token=await jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

        return res.status(200).cookie('token',token,{httpOnly:true,sameSite:"strict",maxAge:1 * 24 * 60 * 60 * 1000}).json({
            message:"Loggedin successfully",
            token:token
        })


    } catch (error) {
        console.log("Error in login controller",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}



export const logout =async(_,res)=>{
    try {
        return res.cookie('token','',{maxAge:0}).status(200).json({
            message:"Logged out successfully"
        })
    } catch (error) {
        console.log("error in logout controller",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}