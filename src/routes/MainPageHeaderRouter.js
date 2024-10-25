const express  = require('express')
const router = express.Router()
const MainPageHeaderController = require('../controller/MainPageHeaderController')

router.get('/',MainPageHeaderController.getMainPageHeader)
router.put('/',MainPageHeaderController.updateMainPageHeader)

module.exports = router