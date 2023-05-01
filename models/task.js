import mongoose from "mongoose";

const schema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },

    iscompleted:{
    type:Boolean,
    default:false,
    },

    user:{
        type:mongoose.Schema.Types.ObjectID,
        ref:"users",
        required:true,

    },

    createdAt:{
      type:Date,
      default:Date.now,
    }


})


export const Task=mongoose.model("Task",schema);