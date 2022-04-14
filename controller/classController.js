const {validationResult} = require('express-validator');

module.exports = {

    getAllClass : (req,res,next)=>{

        res.status(200).json({data:" get all class"})

    },
    getoneClass : (req,res,next)=>{
        res.status(200).json({data:" get 0ne class"})

        
    },
    createClass : (req,res,next)=>{

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
    updateClass : (req,res,next)=>{

        res.status(200).json({data:" update class"})

    },
    deleteClass : (req,res,next)=>{

        res.status(200).json({data:" delete class"})

    },
}