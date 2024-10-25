const express = require('express')
const router = express.Router();
const serviceRouter = require('../routes/OurServicesRouter')
const MainPageHeaderRouter = require("../routes/MainPageHeaderRouter")
const MainPageAboutUsRouter = require("../routes/MainPageAboutUsRouter")
router.use('/service',serviceRouter)
router.use("/main-page/header",MainPageHeaderRouter)
router.use('/main-page/about-us',MainPageAboutUsRouter)
module.exports = router