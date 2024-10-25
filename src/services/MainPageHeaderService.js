const MainPageHeaderRepository = require("../repositories/MainPageHeaderRepository");
const IsResponseTrueOrFalse = require("../utils/IsResponseTrueOrFalse");



class MainPageHeaderService {

        async getMainPageHeader (){
            const response =  await MainPageHeaderRepository.getMainPageHeader()
            return IsResponseTrueOrFalse.check(response,"header not found")
        }

        async updateMainPageHeader(data){
            
            const response = await MainPageHeaderRepository.updateMainPageHeader(data)
            
            return IsResponseTrueOrFalse.check(response,"Updated failed")
        }

}
module.exports =new MainPageHeaderService()