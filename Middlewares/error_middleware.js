let errorMiddleware = (rea,res)=>{
    let status = 500
    res.status(status).json({Error : err + "error is not defined"})
}


module.exports = errorMiddleware