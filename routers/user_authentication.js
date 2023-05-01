import express from "express";
import {Registor,Login,Logout,getmydata} from "../controller/authentication_function.js";
import {aunthentication} from "../middleware/is_auth.js"

const router=express.Router();


router.post("/new",Registor); 
router.post("/login",Login);
router.get("/logout",Logout);
router.get("/me",aunthentication,getmydata)


export default router;