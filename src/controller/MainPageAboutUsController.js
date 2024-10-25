const MainPageAboutUsService = require("../services/MainPageAboutUsService")
const ResponseGenerate = require("../utils/ResponseGenerate")


class MainPageAboutUsController {

    async getMainPageAboutUs(req, res, next) {
        try {
            const response = await MainPageAboutUsService.getMainPageAboutUs()
            return ResponseGenerate.success(res, "success", 200, response)
        } catch (error) {
            next(error)
        }
    }

    async updateMainPageAboutUsTitle(req, res, next) {
        const title = req.body
        try {
            const response = await MainPageAboutUsService.updateMainPageAboutUsTitle(title)
            return ResponseGenerate.success(res, "success", 200, response)

        } catch (error) {
            next(error)
        }
    }

    async getAllMainPageAboutUsContents(req, res, next) {
        try {
            const response = await MainPageAboutUsService.getAllMainPageAboutUsContents()
            return ResponseGenerate.success(res, "success", 200, response)

        } catch (error) {
            next(error)
        }
    }

    async getMainPageAboutUsContentById(req, res, next) {
        const { id } = req.params
        try {
            const response = await MainPageAboutUsService.deleteMainPageAboutUsById(id)
            return ResponseGenerate.success(res, "success", 200, response)

        } catch (error) {
            next(error)
        }
    }

    async createMainPageAboutUsContent(req,res,next){
        const data = req.body
        try {
            const response = await MainPageAboutUsService.createMainPageAboutUsContent(data)
            return ResponseGenerate.success(res, "success", 200, response)

        } catch (error) {
            next(error)
        }
    }

    async updateMainPageAboutUsContentById(req,res,next){
        const {id} = req.params
        const data = req.body

        try {
            
            const response =await MainPageAboutUsService.updateMainPageAboutUsContentById(id,data);
            return ResponseGenerate.success(res, "success", 200, response)

        } catch (error) {
            next(error)
        }
    }

    async deleteMainPageAboutUsById(req,res,next){
        const {id} = req.params
        try {
            const response  = await MainPageAboutUsService.deleteMainPageAboutUsById(id);
            return ResponseGenerate.success(res, "success", 200, response)

        } catch (error) {
            next(error)
        }
    }

}


module.exports = new MainPageAboutUsController()