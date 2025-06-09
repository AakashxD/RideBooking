const dotenv=require('dotenv').config();
const express=require('express');
const http=require('http');
const connectDB=require('./config/db.js');
const authRoutes=require('./routes/authRoutes.js');
const bookingRoutes=require('./routes/bookingRoutes.js');
const driverRoutes=require('./routes/driverRoutes.js');
const pssengerRoutes=require('./routes/passengerRoutes.js');
const app=express();

const server=http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('api/auth',authRoutes)

app.listen(process.env.PORT,()=>{
    connectDB();
    console.log(`server running on port ${process.env.PORT}`);
});
