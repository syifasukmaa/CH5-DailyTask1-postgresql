const router = require('express').Router();

const User = require('../controller/userController');
const Auth = require('../controller/authController');
const authenticate = require('../middlewares/authenticate');
// const autentiksi = require('../middlewares/authenticate');

router.post('/', Auth.register);
router.get('/', authenticate, User.findAllUser);
router.get('/:id', authenticate, User.findUserById);
router.patch('/:id', authenticate, User.updateUser);
router.delete('/:id', authenticate, User.deleteUser);

module.exports = router;
