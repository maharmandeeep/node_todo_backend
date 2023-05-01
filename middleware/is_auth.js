import jwt from "jsonwebtoken";
import { users } from "../models/user.js";


export const aunthentication=async(req,res,next)=>{
    const {token}=req.cookies;
 

    if(!token){
     return  res.status(404).json({
        sucess:"false",
        messgae:"login first "
      })
  
    }
    const decoded=  jwt.verify(token,process.env.jwtSecreat);
  
    req.user= await users.findById(decoded._id);
    next();
}