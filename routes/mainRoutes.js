const express = require('express');
const router = express.Router();
const { indexPage, account, adminPage, stockMarketAPI, newsAPI } = require('../controllers/mainController');

router.get('/', indexPage);
router.get('/account', account);
router.get('/admin', adminPage);
router.get('/stockmarketapi', stockMarketAPI);
router.get('/newsapi', newsAPI);

module.exports = router;