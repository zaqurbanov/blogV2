const express = require('express')
const router = express.Router();
const serviceRouter = require('../routes/OurServicesRouter')
const MainPageHeaderRouter = require("../routes/MainPageHeaderRouter")

router.use('/service',serviceRouter)
router.use("/main-page/header",MainPageHeaderRouter)
// router.use('/main-page/about-us',"")
module.exports = router