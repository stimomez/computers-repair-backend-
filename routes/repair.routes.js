const express = require('express');
const router = express.Router();

const { pendingRepair } = require('../middlewares/repairs.middlewares');
const { createService, checkValidations} = require('../middlewares/validationsRepairs.middlewares')
const {
  getAllPendingEquipments,
  createAppointment,
  pendingEquipmentsById,
  updateRepairStatus,
  cancelRepair,
} = require('../controllers/repair.controller');

router.get('/', getAllPendingEquipments);
router.post('/',createService, checkValidations, createAppointment);

router
  .route('/:id')
  .get(pendingRepair, pendingEquipmentsById)
  .patch(pendingRepair, updateRepairStatus)
  .delete(pendingRepair, cancelRepair);

module.exports = { repairsRouter: router };
