const OurServicesModel = require("../model/OurServicesModel");



class OurServiceRepository {


    async getAllService (){
         
            
        //butun servicleri cagiririq ve onlari sonuncusuna gore sort edirik
        return await OurServicesModel.find().sort({createdAt:-1})
    }

    async createService (data){
                const newService  = new OurServicesModel(data)
                return await newService.save()
    }

    async getOurServiceById(id){
        return await OurServicesModel.findById(id)
    }
    async updateOuServiceById (id,data){
            return await OurServicesModel.findByIdAndUpdate(id,data,{new:true})
    }
    async deleteOurServiceById (id){
        return await OurServicesModel.findByIdAndDelete(id)
    }
}


module.exports = new OurServiceRepository()