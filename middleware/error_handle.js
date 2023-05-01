

class Error_own extends Error{

    constructor(message,status_code){
    super(message);
    this.status_code=status_code;
}
}

export const error_handler=(err,req,res,next)=>{

    err.message=err.message || "Internal server error ";
    err.status_code=err.status_code|| 500;
    
    res.status(err.status_code).json({
        success:"false",
        messgage:err.message,
    })
}


export default Error_own;