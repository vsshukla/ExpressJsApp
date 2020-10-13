const Employee = require('../models/Employees');

// find all employee
const index = (req, res) => {
    Employee.find()
        .then(response => res.json(response))
        .catch(error => res.json({ message: 'no data found', error: error }))
}

// find specific employee
const getEmployee = async (req, res) => {
    await Employee.findById(req.query.employeeId)
        .then(response => res.json(response))
        .catch(error => res.json({ message: 'no data found', error: error }))
}

// insert new employee
const addEmployee = (req, res, next) => {
    // prepare query
    const employee = new Employee({
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email,
        "address": req.body.address,
        "phone": req.body.phone,
        "date": req.body.date
    });

    //save
    employee.save()
        .then(response => res.json({ message: 'saved successfully' }))
        .catch(error => res.json({ message: 'data not saved', error: error }))
}

// delete an employee
const deleteEmployee = (req, res) => {
    Employee.findByIdAndDelete(req.body.id)
        .then(response => res.json({ message: ' Document deleted' }))
        .catch(error => res.json({ message: 'no data found' }))
}


// update employee
const updateEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.body.id, req.body)
        .then(response => res.json({ message: 'saved successfully' }))
        .catch(error => res.json({ message: 'data not saved', error: error }))
    console.log(req.params())
}


module.exports = {
    index, getEmployee, addEmployee, deleteEmployee, updateEmployee
}