

const mongoose = require('mongoose')

const OurServiceModel = new mongoose.Schema({
    title:{
        type:String,
        required:true,

    },
    mainContent:{
        type:String,
        required:true
    },
    subContent:{
        type:String,
        required:true
    },
    icon:{
        type:String,

    },
    image:{
        type:String
    } 
})
   
module.exports = mongoose.model("OurServiceModel",OurServiceModel) 