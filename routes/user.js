const userControl=require('../controller/user')
const express = require('express')
const router = express.Router();
router.post('/',userControl.getUserDetails)

module.exports=router;

