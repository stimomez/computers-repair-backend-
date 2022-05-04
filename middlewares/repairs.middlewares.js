const { Repair } = require('../models/repair.models');

const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

const pendingRepair = catchAsync( async (req, res, next) => {
 
    const { id } = req.params;
    const status = 'pending'
    const repair = await Repair.findOne({ where: { id, status } });

    if (!repair) {
      return next(new AppError('Repair does not exist with given Id', 404));
    }
  
    req.rapair = repair;
    next();
  });

module.exports = { pendingRepair };
