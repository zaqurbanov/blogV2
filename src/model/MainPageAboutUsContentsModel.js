const mongoose = require('mongoose')



const MainPageAboutUsContentsModel  = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
 
},{timestamps:true})

module.exports = mongoose.model("MainPageAboutUsContentsModel",MainPageAboutUsContentsModel)