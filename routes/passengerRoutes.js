const express=require('express');
const authMiddleware=require('../middlewares/authMiddleware.js');
const getPassengerBooking=require('../controllers/passengerController.js');
const provideFeedback=require('../controllers/passengerController.js')
const router=express.Router();

// module.exports=(io)=>{
//     router.get('/bookings',authMiddleware,getPassengerBooking);
//     router.post('/feedback',authMiddleware,provideFeedback);
//     return router;
// }