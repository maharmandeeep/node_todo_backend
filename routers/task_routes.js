import  express  from "express";
import { newtask ,getalltask,updatetask,deletetask} from "../controller/task_function.js";
import {aunthentication} from "../middleware/is_auth.js"

const taskrouter=express.Router();

taskrouter.post("/newtask",aunthentication,newtask);

taskrouter.get("/getmytask",aunthentication,getalltask);

taskrouter.route("/:id").put(aunthentication,updatetask).delete(aunthentication,deletetask)








export default taskrouter;