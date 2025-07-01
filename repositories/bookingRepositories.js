const Booking =require('../models/booking');

const findBooking=async(criteria)=>{
   const booking=await Booking.findOne(criteria);
   return booking;
}
const createBooking=async(bookingDetails)=>{
    const createdBooking=await new Booking(bookingDetails);
    createdBooking.save();
    return createdBooking;
}
module.exports={
    findBooking,createBooking
}