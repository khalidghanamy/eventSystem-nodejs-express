const morgan = require('morgan');

let morganData = morgan(':method :url :status :http-version :response-time ')

module.exports=morganData