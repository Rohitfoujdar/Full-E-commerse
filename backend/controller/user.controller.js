import User from "../model/user.model.js"
import bcrypt from "bcrypt"

export const signup = async (req, res)=>{
    try{
        // console.log("Request Body: ", req.body); // Debugging step
       const {fullname, email, password} = req.body
       const user = await User.findOne({email})
       if(user){
       return res.status(400).json({message:"user already exist"})
       }

       const hashPassword = await bcrypt.hash(password, 10)

       const createUser = new User ({
        fullname, 
        email, 
        password: hashPassword
       })
       const profile= await createUser.save();
       res.status(200).json({response: profile,})
    }catch(error){
       console.log("error:",error)
       res.status(500).json({message:"Internal server error"})
    }
}

export const login = async (req, res)=>{
    try{
      const {email, password}=req.body;
      const user = await User.findOne({email});
      const isMatch = await bcrypt.compare(password, user.password)
      if(!user || !isMatch){
        return res.status(400).json({message:"Invalid Username and password"})
    }
    res.status(200).json({message:"login Successfully", user:{
        _id:user.id,
        fullname:user.fullname,
        email:user.email
    }})
    }catch(error){
        console.log("error:",error)
       res.status(500).json({message:"Internal server error"})
    }
}