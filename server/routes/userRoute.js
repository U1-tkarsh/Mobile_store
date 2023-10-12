const express = require('express');
const {makeAdmin, loginUser, registerUser, forgotPassword, getUser, getUserandUpdate, getAllUser, deleteUser} = require('../controller/userController')

const router = express.Router();


router.post("/login", loginUser);
router.post("/register", registerUser);
router.post('/forgotPassword', forgotPassword)


router.put('/admin/:id', makeAdmin);
router.put('/updateUser/:id', getUserandUpdate);


router.get("/getUser/:id", getUser);
router.get("/getAllUser", getAllUser);


router.delete('/deleteUser/:id', deleteUser);


module.exports = router;