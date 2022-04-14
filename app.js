const express = require('express');
const body_parser = require('body-parser'); 
const path = require('path');

// require middleware
const morgan = require('./Middlewares/urlRequest');
const errorMiddleware = require('./Middlewares/error_middleware');
const notFound = require('./Middlewares/notfound_middleware');
const cors = require('./Middlewares/cors_moddleware');


//require routers
const auth = require('./Routers/authRouter');
const childRouter = require('./Routers/childRouter');
const classRouter = require('./Routers/classRouter');
const teacherRouter = require('./Routers/teacherRouter');

//create server
const app =express();
let port = process.env.PORT||4000;

app.listen(port,()=>{
    console.log("server is up ..$")
});

//----------------------------------------------------------------------//
//middlewares 
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false})); 
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



//not found && Error middlewares
app.use(notFound);
app.use(errorMiddleware)












