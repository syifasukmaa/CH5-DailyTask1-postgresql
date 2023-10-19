const router = require('express').Router();

const Product = require('../controller/productController');
const upload = require('../middlewares/uploader');
const autentikasi = require('../middlewares/authenticate');
const checkRole = require('../middlewares/checkRole');
const checkOwnerShip = require('../middlewares/checkOwnerShip');

router.post(
  '/',
  autentikasi,
  checkRole('Owner'),
  checkOwnerShip,
  upload.single('image'),
  Product.createProduct
);
router.get('/', Product.findProducts);
router.get('/:id', Product.findProductById);
router.patch(
  '/:id',
  autentikasi,
  checkRole('Owner'),
  checkOwnerShip,
  Product.updateProduct
);
router.delete(
  '/:id',
  autentikasi,
  checkRole('Owner'),
  checkOwnerShip,
  Product.deleteProduct
);

module.exports = router;
