import mongoose from "mongoose";

const schema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    
    },
    password:
    { type:String,
        required:true,
        select:false,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    createdat:{
        type:Date,
        default:Date.now,
    }

})


export const users= mongoose.model("users",schema);