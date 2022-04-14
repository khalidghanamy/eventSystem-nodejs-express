const express = require('express');
const {classValidation} = require('../validation/validation');
const {getAllClass,getoneClass,createClass,updateClass,deleteClass} = require('../controller/classController');


const router=express.Router();


router.route("/Class")
.get(getAllClass)
.post(classValidation,createClass)

router.route("/Class/:id")
.get(getoneClass)
.put(updateClass)
.delete(deleteClass)


module.exports=router