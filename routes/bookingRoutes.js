const express=require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router=express.Router();

// module.exports=(io)=>{
//      router.post('/',authMiddleware,createBooking(io));
//      router.post('/confirm',confirmBooking(io));
//      return router;
// }