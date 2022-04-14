const express = require('express');
const {login,resgistration} = require('.././controller/authController');
const {loginValidation,registrationValidation} = require('../validation/validation');
const router=express.Router();


router.route('/login').post(loginValidation,login);

router.route('/registration').post(registrationValidation,resgistration);




module.exports=router;