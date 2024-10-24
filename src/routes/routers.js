const express = require('express')
const router = express.Router();
const serviceRouter = require('../routes/OurServicesRouter')


router.use('/service',serviceRouter)

module.exports = router