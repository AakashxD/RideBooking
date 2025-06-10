const express=require('express');
const authMiddleware=require('../middlewares/authMiddleware');

const router=express.Router();

// router.get('/booking',authMiddleware,getDriverBookings);

// router.get('/location',authMiddleware,updateLocation);

module.exports=router;
