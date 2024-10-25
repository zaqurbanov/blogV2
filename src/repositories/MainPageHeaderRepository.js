const MainPageHeaderModel = require("../model/MainPageHeaderModel")



class MainPageHeaderRepository {

    // Yalniz bir eded header olduguna gore 
    async getMainPageHeader (){
            return await MainPageHeaderModel.find()

    }

    // yalniz bir eded content olduguna gore eger baslangicda hec bir obyekt yoxdursa yeni uzunlugu 1den kicikdirse o zaman yenisini yaradiriq. yox eger varsa var olani deyisirik
    async updateMainPageHeader(title){
        
        const header  = await MainPageHeaderModel.find()
        if(header.length<1){
            return await MainPageHeaderModel.create(title)
        }
        return await MainPageHeaderModel.findOneAndUpdate({},title,{new:true})
        
     
         
    }

} 


module.exports = new MainPageHeaderRepository() 