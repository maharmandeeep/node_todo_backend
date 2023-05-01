import { users } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { token_making } from "../utility/token_makeing.js";
import Error_own from "../middleware/error_handle.js";

//for registor
export const Registor = async (req, res, next) => {

  try {
    const { name, email, password } = req.body;

    let user = await users.findOne({ email });
  
    if (user) return next(new Error_own("email already exist", 400));
  
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
  
    user = await users.create({
      name,
      email,
      password: hash,
    });
  
    token_making(user, "data is inserted", res);
  } catch (error) {
    next(error)
  }
 
};

//for login

export const Login = async (req, res,next) => {

  try { 
    const { email, password } = req.body;

    let user = await users.findOne({ email }).select("+password");
  
    if (!user) return next(new Error_own("invalid email and passsword", 400));
  
    let ismatch = await bcrypt.compare(password, user.password);
  
    if (!ismatch) return next(new Error_own("invalid email and passsword", 400));
  
    token_making(user, "sucessfully login ", res);
    
  } catch (error) {
    next(error)
    
  }
 
};

//get user all data

export const getmydata = async (req, res,next) => {

  try {
    res.json({
      sucess: "true",
      user: req.user,
    });
  } catch (error) {
    next(error)
  }
  
}
//for logout
export const Logout = (req, res) => {
  res
    .status(202)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite:(process.env.NODE_env==="development")?"lax":"none",
      secure:(process.env.NODE_env==="development")?false:true,
    })
    .json({
      sucess: "true",
      message: "logout sucessfully",
    });
};
