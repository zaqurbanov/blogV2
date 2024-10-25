const MainPageAboutUsRepository = require("../repositories/MainPageAboutUsRepository")
const IsResponseTrueOrFalse = require("../utils/IsResponseTrueOrFalse")


class MainPageAboutUsService{

    async getMainPageAboutUs(){
        const response  = await MainPageAboutUsRepository.getMainPageAboutUs()
        return IsResponseTrueOrFalse.check(response,"failed")
    }

    async updateMainPageAboutUsTitle(title){
        const response = await MainPageAboutUsRepository.updateMainPageAboutUsTitle(title)
        return IsResponseTrueOrFalse.check(response,"failed")
    }

    async getAllMainPageAboutUsContents (){

        const response  = await MainPageAboutUsRepository.getAllMainPageAboutUsContents()
        return IsResponseTrueOrFalse.check(response,"failed")


    }
    

    async getMainPageAboutUsContentById(id){
        const response = await MainPageAboutUsRepository.getMainPageAboutUsContentById(id)
        return IsResponseTrueOrFalse.check(response,"failed")
    }

    async createMainPageAboutUsContent(data){
        const response = await MainPageAboutUsRepository.createMainPageAboutUsContent(data);
        return IsResponseTrueOrFalse.check(response,"failed")
    }
    async updateMainPageAboutUsContentById(id,data){
        const response  = await MainPageAboutUsRepository.updateMainPageAboutUsContentById(id,data)
        return IsResponseTrueOrFalse.check(response,"failed")
    }

    async deleteMainPageAboutUsById(id){
        const response  = await MainPageAboutUsRepository.deleteMainPageAboutUsById(id)
        return IsResponseTrueOrFalse.check(response,failed)
    }


}

module.exports = new MainPageAboutUsService()