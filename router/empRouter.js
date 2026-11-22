
const express = require('express');
const {displayEmp,addForm,addEmp} = require('../controller/empController');
const router = express.Router()

router.get("/",displayEmp)
router.get("/add",addForm)
router.post("/addEmp",addEmp)

module.exports = router