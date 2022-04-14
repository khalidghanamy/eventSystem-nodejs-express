

let notFound = (req,res)=>{
    let status = 404 
    res.status(status).json({data :" page not found"})
}
module.exports = notFound;