const express = require('express');

const router = express.Router();
const Employee = require('../model/employee');

// get all
router.get('/', (req, res) => {
  Employee.find().where('name').regex(req.query.filter || '').then(employees => res.json(employees));
});


// create an employee
router.post('/', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ mesasge: 'Invalid syntax' });
  }
  Employee.create({ name: req.body.name, manager: req.body.manager })
});
  // update employee
//     .then(employee => Employee.findByIdAndUpdate(req.body.name, { $push: { employees: employee._id } }))
//     .then(() => Employee.find()).then(employees => res.status(201).json({ message: 'employee successfully added.', employees }));
// });


// delete
router.delete('/:id', (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then(employee => employee ? Employee.find() : Promise.reject(new Error('invalid ID')))
    .then(employees => res.status(200).json({ message: 'Employee deleted', employees }))
    .catch(err => {
      if (err.message === 'invalid ID') {
        return res.status(404).json({ msg: err.message });
      }
      return res.status(500).json(err);
    });
});

module.exports = router;
