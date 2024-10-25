const ErrorHandlerMiddleWares = require("../middlewares/ErrorHandlerMiddleWares");
const OurServiceRepository = require("../repositories/OurServiceRepository");
const IsResponseTrueOrFalse = require("../utils/IsResponseTrueOrFalse");


// service layeri yaradiriq. biznesi burada teyin edirik.
class OurServicesService {
    // asinxron olaraq service sorgu gonderirik
    // gelen sorgunu response deyisenine teyin edirik
    // gelen deyeri  isResponseTrueOrFalse classinin check metoduna yonlendiririk.... 
    // check metodu response deyiseninin deyerinden asili olaraq  geriye Ya oz custom errorumuzu qaytarir . ve ya sadece responsenin ozunu.
    async getAllOurService() {
        const response = await OurServiceRepository.getAllService()
        return IsResponseTrueOrFalse.check(response, "Service not found")
    }

    async createService(data) {
        const response = await OurServiceRepository.createService(data)

        return IsResponseTrueOrFalse.check(response, "unsuccessfully created")


    }

    async getOurServiceById(id) {
        const response = await OurServiceRepository.getOurServiceById(id)

        return IsResponseTrueOrFalse.check(response, "services not found")

    }
    async updateOurServiceById(id, data) {
        const response = await OurServiceRepository.updateOuServiceById(id, data)

        return IsResponseTrueOrFalse.check(response, "updated unsuccessfully")

    }

    async deleteOurServiceById(id) {
        const response = await OurServiceRepository.deleteOurServiceById(id);

        return IsResponseTrueOrFalse.check(response, "Deleted unsuccessfully")
    }
}

    // exportu new ile edirik  cunki basqa yerde bu classin metodlarini cagirdigimiz zaman new etmeyek. bir basa yeni class olaraq export olur.
module.exports = new OurServicesService()