const redis=require('redis');
const dotenv=require('dotenv');
dotenv.config(); // load the file into process.env
const redisClient=redis.createClient({
    url:process.env.REDIS_URI
})
redisClient.on('connect',()=>{
    console.log("Connect to redis");
})
redisClient.on('error',(err)=>{
    console.log("Redis connection error",err);
})

module.exports={
    redisClient
};