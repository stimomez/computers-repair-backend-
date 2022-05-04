const { Repair } = require('../models/repair.models');
const { User } = require('../models/user.model');
const { catchAsync } = require('../utils/catchAsync');

const getAllPendingEquipments = catchAsync(async (req, res) => {
  const repairs = await Repair.findAll({
    include: [{ model: User }],
  });

  res.status(200).json({
    repairs,
  });
});

const createAppointment = catchAsync(async (req, res, next) => {
  const { date, userId, computerNumber, comments } = req.body;

  const newAppointment = await Repair.create({
    date,
    userId,
    computerNumber,
    comments,
  });

  res.status(201).json({ newAppointment });
});

const pendingEquipmentsById = catchAsync(async (req, res, next) => {
  const { repair } = req;

  res.status(200).json({
    repair,
  });
});

const updateRepairStatus = catchAsync(async (req, res, next) => {
  const { repair } = req;

  repair.update({ status: 'completed' });
  res.status(200).json({
    status: 'success',
  });
});

const cancelRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;

  repair.update({ status: 'cancel' });
  res.status(200).json({
    status: 'success',
  });
});
module.exports = {
  getAllPendingEquipments,
  createAppointment,
  pendingEquipmentsById,
  updateRepairStatus,
  cancelRepair,
};
