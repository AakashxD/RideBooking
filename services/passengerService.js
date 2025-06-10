const passengerRepositories=require('../repositories/passengerRepositories.js');
const bookingRepositories=require('../repositories/bookingRepositories.js')

const getPassengerBookings= async(passengerId)=>{
   const passengerDetails = await passengerRepositories.findDetails({_id:passengerId})
   if(!passengerDetails) throw new Error("passenger not found");
   return passengerDetails;
   
}
const provideFeedback=async(passengerId,bookingId,rating,feedback)=>{
    const booking = await bookingRepositories.findBooking({_id:passengerId,bookingId});
    if(!booking) throw new Error("Booking not Found");
    booking.feedback=feedback;
    booking.rating=rating;
    await booking.save();
}
module.exports={
    getPassengerBookings,provideFeedback
}