const { validationResult } = require("express-validator");


module.exports = {

    login : (req,res,next)=>{
        let errors = validationResult(req);
        if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors
            .array()
            .reduce((massage, err) => massage + err.msg + " ", " ");
        throw error;
        }
        res.status(200).json({data :" updated"})

    },
    resgistration : (req,res,next)=>{
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
        let error = new Error();
        error.status = 422;
        error.message = errors
            .array()
            .reduce((massage, err) => massage + err.msg + " ", " ");
        throw error;
        }
        res.status(200).json("registed successfully")
    }






















}