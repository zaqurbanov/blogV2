const OurServicesModel = require("../model/OurServicesModel");



class OurServiceRepository {


    async getAllService() {


        //butun servicleri cagiririq ve onlari sonuncusuna gore sort edirik
        return await OurServicesModel.find().sort({ createdAt: -1 })
    }

    async createService(data) {

        // gelen dataya uygun olaraq  yeni service yaradiriq
        // gelen datanin routeri  post metodu ile /api/promotion/service 
        // !data olamilidir !!
        // * "title":"" 
        // *"mainContent":""
        // * "subContent":""
        // * "icon":""
        //* "image":""   
        const newService = new OurServicesModel(data)
        return await newService.save()
    }

    async getOurServiceById(id) {
        // req.params.id gelir. hemin id ye gore modelimizi axtaririq. 
        return await OurServicesModel.findById(id)
    }
    async updateOuServiceById(id, data) {
        // req.params.id den gelen id ye gore 
        // ve req.body den gelen data parametri ile modeli tapiriq ve onu update edirik. 
        // *new:true - model yenilenerken deyismeyen data silinmir. 
        return await OurServicesModel.findByIdAndUpdate(id, data, { new: true })
    }
    async deleteOurServiceById(id) {
        // id ye gore modeli tapiriq ve silirik. 
        return await OurServicesModel.findByIdAndDelete(id)
    }
}


module.exports = new OurServiceRepository()