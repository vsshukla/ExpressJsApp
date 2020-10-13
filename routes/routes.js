const express = require('express')
const router = express.Router();
const employeeController = require('../controllers/EmployeeController');


router.get('/', employeeController.index);
router.get('/getEmployee', employeeController.getEmployee);
router.post('/save', employeeController.addEmployee);
router.post('/update', employeeController.updateEmployee);
router.delete('/delete', employeeController.deleteEmployee);


module.exports = router;