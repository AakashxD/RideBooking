const Booking =require('../models/booking');

const findBooking=async(criteria)=>{
   const booking=await Booking.findOne(criteria);
   return booking;
}

module.exports={
    findBooking
}