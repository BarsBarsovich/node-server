const express = require('express');

const router = express.Router();

const homeController = require('../controllers/indexController');
const loginController = require('../controllers/loginController');
const adminController = require('../controllers/adminController');


router.get('/', homeController.get);
router.post('/', homeController.post)
router.get('/login', loginController.get);
router.post('/login', loginController.post)
router.get('/admin', adminController.get);

module.exports = router;
