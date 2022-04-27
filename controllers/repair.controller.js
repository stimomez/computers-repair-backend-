const { Repair } = require('../models/repair.models');

const getAllPendingEquipments = async (req, res) => {
  try {
    const repairs = await Repair.findAll();

    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log(error);
  }
};

const createAppointment = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const newAppointment = await Repair.create({
      date,
      userId,
    });

    res.status(201).json({ newAppointment });
  } catch (error) {
    console.log(error);
  }
};

const pendingEquipmentsById = async (req, res) => {
  try {
    const { id } = req.params;

    const pendingEquipment = await Repair.findOne({ where: { id } });
    if (!pendingEquipment) {
      return res.status(404).json({
        status: 'error',
        message: 'teams not found given that id',
      });
    }

    res.status(200).json({
      pendingEquipment,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRepairStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const pendingEquipment = await Repair.findOne({ where: { id } });
    if (!pendingEquipment) {
      return res.status(404).json({
        status: 'error',
        message: 'teams not found given that id',
      });
    }

    pendingEquipment.update({ status: 'completed' });
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

const cancelRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const pendingEquipment = await Repair.findOne({ where: { id } });
    if (!pendingEquipment) {
      return res.status(404).json({
        status: 'error',
        message: 'teams not found given that id fff',
      });
    }

    pendingEquipment.update({ status: 'cancel' });
    res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getAllPendingEquipments,
  createAppointment,
  pendingEquipmentsById,
  updateRepairStatus,
  cancelRepair,
};
