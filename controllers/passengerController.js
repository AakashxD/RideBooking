const passengerService=require('../services/passengerService');

const getPassengerBooking=async(req,res)=>{
     try {
        const passengerBooking= passengerService.getPassengerBookings(req.user._id);
        if(!passengerBooking) throw new Error("no booking found");

        res.status(201).send({success:true,message:passengerBooking});
     } catch (error) {
        res.status(401).send({success:false,message:"Error"});
     }
}
const provideFeedback=async(req,res)=>{
    try {
         const {rating,feedback,bookingId,passengerId}=req.user
     const provideFeedBack= await passengerService.provideFeedback(passengerId,bookingId,rating,feedback);
     if(!provideFeedBack) throw new Error("no feedback");
     res.status(201).send({success:true,message:"FeedBack Provided"});
    } catch (error) {
        res.status(401).send({success:false,message:"Error"});
    }
   

}
module.exports={
    getPassengerBooking,provideFeedback
}