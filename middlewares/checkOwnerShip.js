const ApiError = require('../utils/apiError');
const { Shop } = require('../models');

const checkOwnerShip = async (req, res, next) => {
  const user = req.user;
  try {
    if (!user.shopId)
      return next(new ApiError("this user don't have any shop", 404));

    const shop = await Shop.findByPk(user.shopId);
    if (!shop)
      return next(
        new ApiError('Access forbidden,you are not ownership on this shop', 403)
      );
    next();
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

module.exports = checkOwnerShip;
