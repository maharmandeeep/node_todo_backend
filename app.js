import express from "express";
import {config} from "dotenv";  
import user_router from "./routers/user_authentication.js";
import cookieParser from "cookie-parser";
import taskrouter from "./routers/task_routes.js";
import { error_handler } from "./middleware/error_handle.js";
import cors from "cors";


export const app=express();


//dot env config
config({
    path:"./database/config.env"
})
  
//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin:[process.env.FRONTEND_URL],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true,
    }
));


//usig middleware
app.use("/api/v1/user",user_router);
app.use("/api/v1/task",taskrouter);





app.get("/",(req,res)=>{
    res.send("hello world");
})


//using error midleware 
app.use(error_handler)
