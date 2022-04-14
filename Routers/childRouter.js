const express = require("express");
const {body,query,param} = require('express-validator');
const {childrenValidation} = require('../validation/validation');
const {getAllChildren,getoneChildren,createChildren,updateChildren,deleteChildren} = require('../controller/childController');


const router=express.Router();





router.route("/children")
.get(getAllChildren)
.post(childrenValidation,createChildren)

router.route("/children/:id")
.get(getoneChildren)
.put(updateChildren)
.delete(deleteChildren)



module.exports=router