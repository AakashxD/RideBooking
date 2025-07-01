const redisClient=require('../utils/redisClient.js')

class LocationService{

    async setDetails({driverId,socketId}){
        await redisClient.set(`driver:${driverId}`,socketId);
    }
    async getDetails(driverId){
            return await redisClient.get(`driver:${driverId}`);
    }
    async removeDetails(driverId){
          const result = await redisClient.del(`driver:${driverId}`);
          if(result===1) console.log('key deleted successfully'); 
    }
    async addDriveLocation(driverId,latitude,longitude){
        try {
           const addDriver=await redisClient.sendCommand([
            'GEOADD',
            'drivers',
            latitude.toString(),
            longitude.toString(),
            driverId.toString()
        ]); 
        } catch (error) {
            console.log('Cannot added to redis',error.message);
        }
    }
    async findNearByDrivers(longitude,latitude,radiusKm){
        // particular radius search
        const nearByDrivers=await redisClinet.sendCommand([
            'GEORADIUS',
            'drivers',
            longitude.toString(),
            latitude.toString(),
            'km',
            'WITHCOORD'
        ])
        return nearByDrivers;
    }
}

module.exports=new LocationService();