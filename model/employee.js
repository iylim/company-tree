const mongoose = require('mongoose');

const schema = mongoose.Schema({
  employee: {
    type: String,
    required: true
  },
  manager: String,
});

const employee = mongoose.model('employee', schema);

module.exports = employee;
