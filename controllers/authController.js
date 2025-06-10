const authService=require('../services/authService.js');


const register=async(req,res)=>{
      try {
        const {user,token}=await authService.register(req.body);
        res.status(201).send({data:{user,token},success:true,error:null,message:"user is registered "})
      } catch (error) {
        res.status(400).send(error.message);
      }
}

const login=async()=>{
  try {
    const {email,password}=req.body;
    const {user,token}=await authService.login({email,password});
    res.status(201).send({data:{user,token},success:true,error:null,message:"login successfully"})
  } catch (error) {
    res.status(400).send(error.message);
  }
}

module.exports={
    register,login
}