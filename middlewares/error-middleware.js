const errorMiddleware=(err,req,res,next)=>{
    const status=err.status|| 500;
    const message =err.message || "backened error";
    const extradetails=err.extradetails || "error from backend";

    return res.status(status).json({message,extradetails});

};

module.exports=errorMiddleware;