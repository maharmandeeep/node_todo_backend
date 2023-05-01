import {app} from "./app.js"
import {database_connect }from "./database/databse.js"



//call databse connnecct 
database_connect();


app.listen(8000,()=>{
    console.log("server is  workinng");;
})