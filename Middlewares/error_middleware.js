let errorMiddleware = (err,req,res,next)=>{
    let status = 500
    res.status(status).json({Error : err + "error is not defined"})
}


module.exports = errorMiddleware
