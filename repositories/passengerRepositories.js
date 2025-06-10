const User =require('../models/user.js');
const Booking=require('../models/booking.js')

const findPassengerById=async(passengerId)=>{
    const passengerDetails=await User.findOne({_id:passengerId,role:'passenger'});
    return passengerDetails;
}
module.exports={
    findPassengerById
}