const User=require('../models/user');
const jwt=require('jsonwebtoken');
const dotenv=require("dotenv").config();
const register=async(userData)=>{
    const user=new User(userData);
    await user.save();
    const token=jwt.sign({id:user._id},process.env.JWT_SECERT,{
        expiresIn:"1hr"
    });
    return {user,token};
}

const login=async({email,password})=>{
    // verify if user exits;
       const user=await User.findOne({email});
       if(!user || !(await user.comparePassword(password))){
        throw new Error("Invalid email or password");
       }

       const token=jwt.sign({id:user._id},process.env.JWT_SECERT,{
        expiresIn:"1hr"
    });
    return {user,token};
}

module.exports={register,login};