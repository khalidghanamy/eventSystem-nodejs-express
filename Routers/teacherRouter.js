const express = require('express');
const {teacherValidation} = require('../validation/validation');
const {getAllTeacher,getoneTeacher,createTeacher,updateTeacher,deleteTeacher} = require('../controller/teacherRouter');

const router=express.Router();



router.route("/Teacher")
.get(getAllTeacher)
.post(teacherValidation,createTeacher)

router.route("/Teacher/:id")
.get(getoneTeacher)
.put(updateTeacher)
.delete(deleteTeacher)


module.exports=router