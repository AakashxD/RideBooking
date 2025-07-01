const Booking=require('../models/booking')
const bookingService=require('../services/bookingService');
const locationService = require('../services/locationService');
const createBooking=(io)=>async(req,res)=>{
        const {source ,destination}=req.body;
        const booking =await bookingService.createBooking({passengerId:req.user._id});

        const nearByDrivers=await bookingService.findNearByDrivers(source);
        const drivereIds=[];
        for(const driver of nearByDrivers){
            const driverSocketId=await locationService.getDriverSocket(driver[0]);
            if(driverSocketId){
                drivereIds.push(driver[0]);
                io.to(driverSocketId).emit('newBooking',{bookingId:booking._id,source,destination,fare:booking.fare});
            }

            // get socket ID
            // emit notification -> alert
        }
        await locationService.storeNotifiedDrivers({bookingId,driverIds}){
            for(const driverId of driverIds){
                const addedCount=await redisClinet.sAdd(`notifiedID`)
            }
        }

}
const confirmBooking=async(io)=>{
    
}

module.exports={
    createBooking,confirmBooking
}