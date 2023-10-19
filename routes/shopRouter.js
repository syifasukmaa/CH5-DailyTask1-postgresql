const router = require('express').Router();

const Shop = require('../controller/shopController');
const autentiksi = require('../middlewares/authenticate');
const checkRole = require('../middlewares/checkRole');

router.post('/', autentiksi, checkRole('Owner'), Shop.createShop);
router.get('/', autentiksi, Shop.findShops);
router.patch('/:id', autentiksi, checkRole('Owner'), Shop.updateShop);
router.delete('/:id', autentiksi, checkRole('Owner'), Shop.deleteShop);

module.exports = router;
