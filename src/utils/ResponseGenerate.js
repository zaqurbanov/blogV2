
class Response {
    
        success(res,message="Operation Successfully",statusCode=200,data=null){
            
            let dataSize = 0;
            if (Array.isArray(data)) {
                dataSize = data.length;
            } else if (data && typeof data === 'object') {
                dataSize = Object.keys(data).length;
            }
            return res.status(statusCode || 200).json({
                success:true,
                statusCode:statusCode,
                message:message,
                dataSize:dataSize,
                data:data
            })
        }

}


module.exports = new Response