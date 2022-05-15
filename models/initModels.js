const { Repair } = require('./repair.models');
const { User } = require('./user.model');

const initModels = () => {
  User.hasMany(Repair);
  Repair.belongsTo(User);
};

module.exports = { initModels };
