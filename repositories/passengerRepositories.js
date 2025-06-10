const User =require('../models/user.js');
const Booking=require('../models/booking.js')

const findPassengerById=async(passengerId)=>{
    const passengerDetails=await User.findById({passengerId});
    return passengerDetails;
}
module.exports={
    findPassengerById
}