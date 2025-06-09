const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema=new mongoose.Schema({
   name:String,
   email:{
        type:String,
        unique:true
   },
   password:String,
   role:{
    type:String,
    enum:['driver','passenger']
   },
   location:{
    type:{
        type:String,
        enum:['Point'],
        default:'Point'
    },
    coordinates:{
        type:[Number],
        default:[0,0]
    }
   }

})
// this is pre save middleware that runs before a document is saved to the database 
// pre('save') ->Automatically hashes password before saving user to DB (only if changed)
userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();

    this.password=await bcrypt.hash(this.password,10);
    next();
} )
// comparePassword	Compares raw password input with hashed one in DB (for login/auth).

userSchema.methods.comparePassword=async function(password){
    return bcrypt.compare(password,this.password);
}

const User=mongoose.model('User',userSchema);
module.exports=User;
