const express = require('express');

const { Repair } = require('./models/repair.models');
const { User } = require('./models/user.model');

const { db } = require('./utils/database');

const app = express();

const { usersRouter } = require('./routes/users.routes');

const { repairsRouter } = require('./routes/repair.routes');

const { globalErrorHandler } = require('./controllers/errors.controller');

app.use(express.json());

db.authenticate()
  .then(() => console.log('Databases authenticate'))
  .catch(err => console.log(err));

db.sync()
  .then(() => console.log('Databases synced'))
  .catch(err => console.log(err));

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

app.use('*', globalErrorHandler);

User.hasMany(Repair);
Repair.belongsTo(User);

const PORT = process.env.PORT || 1520;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
