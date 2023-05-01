import {Task} from "../models/task.js"
import Error_own from "../middleware/error_handle.js"

export const newtask=async(req,res,next)=>{

    try {
        const {title,discription}=req.body;

        await Task.create({
          title,
          discription,
          user:req.user,
        })
      
         res.status(202).json({
          sucess:"true",
          message :"sucefully data inserted",
      
         })
    } catch (error) {
        next(error)
    }
          
 

}

//get all task of user

export const getalltask=async(req,res,error)=>{
    try {
        const id=req.user._id;

        const userdata= await Task.find({user:id});
    
        res.json({
            success:"true",
            userdata,
        })
        
    } catch (error) {
        next(error)
    }

  
    
}

//for update 

export const updatetask =async(req,res,next)=>{

    try {
        const id=req.params.id;

        const task=await Task.findById(id);
    
        if(!task) return next( new Error_own("Invalid ID",404));
    
        task.iscompleted=!task.iscompleted;
    
        await task.save();
    
        res.status(202).json({
            success:"true",
            message:"data is updated ",
        })
    
    
        
    } catch (error) {
         next(error)
    }
     
    


}


//delte task

export const deletetask=async(req,res,next)=>{

    try {
        const {id}=req.params;

        const taskdel= await Task.findById(id);
    
        if(!taskdel) return next( new Error_own("invalid id",404))
    
        await taskdel.deleteOne();
    
    
        res.json({
            sucess:"true",
            message:"task is deleted",
        })
    } catch (error) {
        next(error)
    }
    

}