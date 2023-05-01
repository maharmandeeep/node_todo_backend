import mongoose from "mongoose";


export const database_connect=()=>{mongoose.connect(process.env.MONGO_URI, {
    dbName:"TODO_database"
}).then(()=>{
    console.log("database is  connected");
}).catch((e)=>{
    console.log(e);
})}
    