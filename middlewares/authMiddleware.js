const jwt=require('jsonwebtoken');
const User=require('../models/user');
const dotenv=require("dotenv").config();
const authMiddleware=async(req,res,next)=>{
    // get token from header in the request
    const token=req.header('Authorization')?.replace('Bearer','');
    if(!token) return res.status(401).send("Access Denied");

    try {
        const verified=jwt.verify(token,process.env.JWT_SECERT);
        req.user=await User.findById(verified.id);
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
}
module.exports=authMiddleware;
