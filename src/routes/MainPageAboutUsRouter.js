const express = require('express');
const MainPageAboutUsController = require('../controller/MainPageAboutUsController');
const router = express.Router();

// /about-us

router.get('/',MainPageAboutUsController.getMainPageAboutUs)
router.put('/',MainPageAboutUsController.updateMainPageAboutUsTitle)
router.get('/content',MainPageAboutUsController.getAllMainPageAboutUsContents)
router.get('/content/:id',MainPageAboutUsController.getMainPageAboutUsContentById);
router.post('/content',MainPageAboutUsController.createMainPageAboutUsContent)
router.put('/content/:id',MainPageAboutUsController.updateMainPageAboutUsContentById)
router.delete('/content/:id',MainPageAboutUsController.deleteMainPageAboutUsById)
module.exports = router