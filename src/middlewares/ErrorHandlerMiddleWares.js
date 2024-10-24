
class ErrorHandler{

        newError(statusCode,message){
                const error = new Error(message)
                error.statusCode = statusCode
                return error
        }

        nextError(err,req,res,next){
                const statusCode = res.statusCode ==null ? 500 : res.statusCode;
                res.status(statusCode).json({
                    success:false,
                    statusCode:err.statusCode,
                    error:err,
                    message:err.message || "internal server error"
                })
        }

}

module.exports = new ErrorHandler()