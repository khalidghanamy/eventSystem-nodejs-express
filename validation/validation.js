const {body,query,param} = require('express-validator');

module.exports = {
    
    loginValidation : [
        body("username").isAlpha().withMessage(" name is note valid"),
        body("password").isLength({max:8}).withMessage("password is not valid")
    ]
    ,
    registrationValidation : [
        body("fullname").isAlpha().isLength({max:8}).withMessage(" name is note valid"),
        body("password").isLength({max:8}).withMessage("password is not valid"),
        body("email").isEmail().withMessage(" email is note valid"),
        body("image").isAlphanumeric().isLength({max:8}).withMessage("image is not valid")
    ]
    ,
    childrenValidation : [
        body("_id").isNumeric().isLength({max:8}).withMessage(" id is note valid"),
        body("fullname").isAlpha().isLength({max:8}).withMessage(" name is note valid"),
        body("age").isNumeric().withMessage(" age is note valid"),
        body("level").isAlphanumeric().isIn(['PreKG','KG1','KG2']).withMessage("level is not valid"),
        body("address").isAlpha().isIn(["city","street" , "building"]).withMessage("address is not valid"),

    ]
    ,
    teacherValidation : [
        body("_id").isObject().withMessage(" id is note valid"),
        body("fullname").isAlpha().isLength({max:8}).withMessage(" name is note valid"),
        body("password").isLength({max:8}).withMessage("password is not valid"),

        body("email").isEmail().withMessage(" email is note valid"),
        body("image").isAlphanumeric().isLength({max:8}).withMessage("image is not valid")

    ]
    ,
    classValidation : [
        body("_id").isNumeric().isLength({max:8}).withMessage(" id is note valid"),

        body("name").isAlpha().isLength({max:8}).withMessage(" name is note valid"),
        body("supervisor").isAlpha().isLength({max:8}).withMessage(" supervisor is note valid"),
        body("children").isAlpha().isIn(["1","2" , "3"]).withMessage("children is not valid"),

    ]
    





}