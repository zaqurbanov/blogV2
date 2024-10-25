const MainPageHeaderService = require("../services/MainPageHeaderService")
const ResponseGenerate = require("../utils/ResponseGenerate")


class MainPageHeaderController {

    async getMainPageHeader(req, res, next) {
        try {

            const response = await MainPageHeaderService.getMainPageHeader()
            
            return ResponseGenerate.success(res, "Successfully operations", 200, response)
        } catch (error) {
            next(error)
        }

    }

    async updateMainPageHeader(req, res, next) {
        const title = req.body
        
        try {
            const response = await MainPageHeaderService.updateMainPageHeader(title)
            return ResponseGenerate.success(res, "updated Successfully", 200, response)
        } catch (error) {
            next(error)
        }
    }


}


module.exports = new MainPageHeaderController()