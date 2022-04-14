const {validationResult} = require('express-validator');

module.exports = {

    getAllTeacher : (req,res,next)=>{
        res.status(200).json({data:" get all teachers"})
        
    },
    getoneTeacher : (req,res,next)=>{

        res.status(200).json({data:" get 0ne teachers"})

    },
    createTeacher : (req,res,next)=>{

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
    updateTeacher : (req,res,next)=>{

        res.status(200).json({data:" update teachers"})

    },
    deleteTeacher : (req,res,next)=>{

        res.status(200).json({data:" delete teachers"})

    },
}