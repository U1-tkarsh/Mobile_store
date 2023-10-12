const express = require('express');
const {dynamicAttendance, addSubject, updateSubject, getSubject} = require('../controller/attendanceController');
const { isAdmin } = require('../middleware/auth');
const router = express.Router();


router.post('/addSubject',isAdmin, addSubject);

router.get('/getSubject', getSubject);

router.put('/updateSubject/:id', updateSubject);
router.put('/dynamicAttendance/:id', dynamicAttendance);


module.exports = router;