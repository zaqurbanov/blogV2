const OurServicesService = require("../services/OurServicesService")
const ResponseGenerate = require("../utils/ResponseGenerate")


class OurServicesController {

    async getAllOurService(req,res,next){
                

        try {
                const response =await OurServicesService.getAllOurService()
                return ResponseGenerate.success(res," ",null,response)  
            } catch (error) {
                next(error)
            }
    }

    async createService(req,res,next){
        console.log(req.body);
        try {
            const response = await OurServicesService.createService(req.body)
            return ResponseGenerate.success(res,"created successfully",200,response)  
            
        } catch (error) {
            next(error)
        }
 
    }  
    async updateService(req,res,next){

        try {
            
            const response =await OurServicesService.updateOurServiceById(req.params.id,req.body)
            return ResponseGenerate.success(res,"",200,response)  
        } catch (error) {
            next(error)
        }
        
    }

    async deleteService(req,res,next){
        console.log(req.params.id);
        try {
            const response  = await OurServicesService.deleteOurServiceById(req.params.id)
            return ResponseGenerate.success(res,"",null,response)  
        } catch (error) {
            next(error)
        }
    }

    async getServiceById(req,res,next){
        try {
            const response  = await OurServicesService.getOurServiceById(req.params.id)
            return ResponseGenerate.success(res,"",null,response)  
        } catch (error) {
            next(error)
        }
    }
 
}

module.exports = new OurServicesController()