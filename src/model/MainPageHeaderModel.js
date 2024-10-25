const mongoose = require('mongoose')



const MainPageHeaderModel  = new mongoose.Schema({

    title:{
        type:String,
        default:"Bura header yazilacaq",
        required:true
    }

},{timestamps:true})


module.exports = mongoose.model("MainPageHeaderModel",MainPageHeaderModel) 