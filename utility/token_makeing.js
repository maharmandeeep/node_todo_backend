import jwt  from "jsonwebtoken";


export const token_making=async(user,message,res,next)=>{
         try {
          const token = jwt.sign({ _id: user._id }, process.env.jwtSecreat);

          res
            .status(200)
            .cookie("token", token, {
              httpOnly: true,
              maxAge: 15* 60 * 1000,
              sameSite:(process.env.NODE_env==="development")?"lax":"none",
              secure:(process.env.NODE_env==="development")?false:true,
            })
            .json({
              sucess: "true",
              messgae: message,
            });
         } catch (error) {
          next(error)
         }
   
}