

const mongoose = require('mongoose')


const MainPageAboutUsModel = new mongoose.Schema({

    title: {
        type: String,
        default: "aboutUsModelTitle",
        required: true
    },
    contents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MainPageAboutUsContentsModel"
        }

    ]


}, { timestamps: true })

module.exports = mongoose.model("MainPageAboutUsModel", MainPageAboutUsModel)