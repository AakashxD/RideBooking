const dotenv=require('dotenv').config();
const express=require('express');
const http=require('http');
const connectDB=require('./config/db.js');
const authRoutes=require('./routes/authRoutes.js');
const bookingRoutes=require('./routes/bookingRoutes.js');
const driverRoutes=require('./routes/driverRoutes.js');
const pssengerRoutes=require('./routes/passengerRoutes.js');
const passengerRoutes = require('./routes/passengerRoutes.js');
const { redisClient,connectRedis } = require('./utils/redisClient.js');
const cors=require('cors');
const { Server } = require('socket.io');
const LocationService=require('./services/locationService.js')


const app=express();

const server=http.createServer(app);
const io=new Server(server,{
    cors: {
    origin: '*', // Replace with your frontend origin in production
  }

})
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
// static file middleware - server as fronted server


app.use('api/auth',authRoutes);
app.use('/api/booking',bookingRoutes(io));
app.use('/api/drivers',driverRoutes);
app.use('/api/passengers',passengerRoutes(io));



redisClient.on('ready', () => {
    console.log('Connected to Redis');
});
redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});
// pending
io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);
  });



app.listen(process.env.PORT,()=>{
    connectDB();
    connectRedis();
    console.log(`server running on port ${process.env.PORT}`);
});
io.connectTimeout()
