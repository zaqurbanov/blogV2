const ErrorHandlerMiddleWares = require("../middlewares/ErrorHandlerMiddleWares");
const OurServiceRepository = require("../repositories/OurServiceRepository")



class OurServicesService {

    async getAllOurService(){
        const response = await OurServiceRepository.getAllService()
        if(!response)
            throw ErrorHandlerMiddleWares.newError("Services not found");
            
        return response
    }

    async createService (data){
        const response = await OurServiceRepository.createService(data)
        if(!response)
            throw ErrorHandlerMiddleWares.newError("unsuccessfully created");

        return response
            
    }

    async getOurServiceById (id){
        const response  = await OurServiceRepository.getOurServiceById(id)
        if(!response)
            throw ErrorHandlerMiddleWares.newError("services not found");

        return response
    }
    async updateOurServiceById(id,data){
        const response = await OurServiceRepository.updateOuServiceById(id,data)
        
        if(!response)
            throw ErrorHandlerMiddleWares.newError("updated unsuccessfully");

        return response
    }

    async deleteOurServiceById (id){
        const response =  await OurServiceRepository.deleteOurServiceById(id);
    
        if(!response)
            throw ErrorHandlerMiddleWares.newError("Deleted unsuccessfully");

        return response
    }
}
 

module.exports = new OurServicesService()