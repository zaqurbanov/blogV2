//!  Custom error handlerimiz.
class ErrorHandler{
        //! Yeni Error yaradan metod. 
        //* new Error ile yeni bir error yaradiriq. ve ona error mesaji kimi message parametrini otururuk. 
        //* yaratdigimiz yeni erroru, error deyisenine teyin edirik. 
        //* error obyektine yeni bir key value (statusCode:statuscode) deyer cutu elave edirik ve return edirik.
        
        newError(message,statusCode){
                const error = new Error(message)
                error.statusCode = statusCode
                return error
        }
                //! Esas error middleware metodumuz. Bu metodu index.js(esas sehifede) middleware kimi istifade edirik. 
                //* expressin custom error handleri err,req,res,next parametrlerini qebul edir. 


        nextError(err,req,res,next){
                const statusCode = res.statusCode ==null ? 500 : res.statusCode;

                //* istifadeciye gondermek istediyimiz mesajin strukturunu yaradib gonderirik
                res.status(statusCode).json({
                    success:false,
                    statusCode:err.statusCode,
                    error:err,
                    message:err.message || "internal server error"
                })
        }

}

module.exports = new ErrorHandler()