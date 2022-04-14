const {validationResult} = require('express-validator');

module.exports = {

    getAllChildren : (req,res,next)=>{

        res.status(200).json({data:" get all children"})

    },
    getoneChildren : (req,res,next)=>{

        res.status(200).json({data:" get 0ne children"})

    },
    createChildren : (req,res,next)=>{

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
    updateChildren : (req,res,next)=>{
        // let errors = validationResult(req);

        // if (!errors.isEmpty()) {
        // let error = new Error();
        // error.status = 422;
        // error.message = errors
        //     .array()
        //     .reduce((massage, err) => massage + err.msg + " ", " ");
        // throw error;
        // }
        // res.status(200).json({data :" updated"})
        res.status(200).json({data:" update children"})


    },
    deleteChildren : (req,res,next)=>{

        res.status(200).json({data:" delete children"})

    },
}