const express = require('express');
const router = express.Router();

const {
  getAllPendingEquipments,
  createAppointment,
  pendingEquipmentsById,
  updateRepairStatus,
  cancelRepair,
} = require('../controllers/repair.controller');

router.get('/', getAllPendingEquipments);
router.post('/', createAppointment);

router
  .route('/:id')
  .get(pendingEquipmentsById)
  .patch(updateRepairStatus)
  .delete(cancelRepair);

module.exports = { repairsRouter: router };
