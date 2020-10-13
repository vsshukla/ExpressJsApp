const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
    Create schema 
*/
const employeeSchema = new Schema({
    Name: String,
    username: String,
    email: String,
    address: [{ street: String, city: String, zipcode: Number }],
    phone: String,
    date: { type: Date, default: new Date() },
}, { timestamps: true });

// execute structure in db
var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;