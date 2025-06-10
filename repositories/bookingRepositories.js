const Booking =require('../models/booking');

const findBooking=async({bookingId,passengerId})=>{
   const booking=await Booking.findById({_id:bookingId});
   return booking;
}

module.exports={
    findBooking
}