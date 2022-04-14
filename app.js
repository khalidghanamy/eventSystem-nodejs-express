const express = require('express');
const body_parser = require('body-parser'); 
const path = require('path');

// require middleware
const morgan = require('./Middlewares/urlRequest');
const errorMiddleware = require('./Middlewares/error_middleware');
const notFound = require('./Middlewares/notfound_middleware');
const cors = require('./Middlewares/cors_moddleware');
const childRouter = require('./Routers/childRouter');
const classRouter = require('./Routers/classRouter');
const teacherRouter = require('./Routers/teacherRouter');


//routers
const auth = require('./Routers/authRouter');


//create server
const app =express();

app.listen(process.env.PORT||4000,()=>{
    console.log("server is up ..$")
});



app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false})); 

//-------------------------ROUTES--(End Points)--------------------------//

//middlewares 

app.use(morgan);
app.use(cors)

//main router 
app.get("/",(req,res)=>{
    res.json({data:"hi"})
})

app.use(auth)

app.use(childRouter);
app.use(teacherRouter);
app.use(classRouter);



//----------------------------------------------------------------------//
//not found midleeware
app.use((req,res)=>{
    
let status=err.status || 500;
    res.status(status).json({data:"not Found"});
});
// middleware errors catcher (4--parameters are mandatory)
app.use((err,req,res,next)=>{   
    res.status(500).json({Error:err+""})
});






app.use(notFound);
app.use(errorMiddleware)












