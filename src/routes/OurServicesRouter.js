const express = require('express')
const router = express.Router();
const ourServiceController = require('../controller/OurServicesController')


router.get('/',ourServiceController.getAllOurService)
router.get('/:id',ourServiceController.getServiceById)
router.post('/',ourServiceController.createService)
router.put('/:id',ourServiceController.updateService)
router.delete('/:id',ourServiceController.deleteService)

module.exports = router