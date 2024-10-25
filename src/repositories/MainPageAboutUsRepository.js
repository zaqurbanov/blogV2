const MainPageAboutUsContentsModel = require("../model/MainPageAboutUsContentsModel")
const MainPageAboutUsModel = require("../model/MainPageAboutUsModel")


class MainPageAboutUsRepository {

    async getMainPageAboutUs() {
        return await MainPageAboutUsModel.find().populate("contents")
    }

    //about usin title hissesi hemise var olacaq. hec vaxt silinmeyecek yalniz update olacaq. ona gorede , eger yoxdursa yenisi yaradilacaq. yox eger vardirsa o zaman evvelkinin uzerine yazilacaq.
    async updateMainPageAboutUsTitle(data) {
        // Evvelce about title ile var olub olmadigini yoxlayiriq
        const aboutTitle = await MainPageAboutUsModel.find()
        // eger yoxdursa o zaman yenisin yaradiriq.
        if (aboutTitle.length < 1) {
            return await MainPageAboutUsModel.create(data)
        }
        // eger varsa o zaman update edirik
        return await MainPageAboutUsModel.findOneAndUpdate({}, data, { new: true })
    }
    // about usin butun contentlerini almaq ucun yazilan funksiya
    async getAllMainPageAboutUsContents() {
        return await MainPageAboutUsContentsModel.find()
    }
    //contentsleri idsine gore cagirmaq
    async getMainPageAboutUsContentById(id) {
        return await MainPageAboutUsContentsModel.findById(id)
    }

    // Yeni content yaratmaq 

    async createMainPageAboutUsContent(data) {
        return await MainPageAboutUsContentsModel.create(data)
    }


    // contenti idsine gore update etmek
        async updateMainPageAboutUsContentById(id,data){
            return await MainPageAboutUsContentsModel.findByIdAndUpdate(id,data,{new:true})
        }



    // contenti idsine gore silmek
        async deleteMainPageAboutUsById(id){
            return await MainPageAboutUsContentsModel.findByIdAndDelete(id)
        }
}

module.exports = new MainPageAboutUsRepository()