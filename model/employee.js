const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: String,
  manager: String,
});


const employee = mongoose.model('employee', schema);

module.exports = employee;
