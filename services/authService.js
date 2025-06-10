const User=require('../models/user');
const jwt=require('jsonwebtoken');

const register=async(userData)=>{
    const user=new User(userData);
    
}

const login=async({email,password})=>{
    // verify if user exits;

    // decrypt and compare 
    // User.comparePassword();
}

module.exports={register,login};