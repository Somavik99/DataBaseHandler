const mongoose = require('mongoose');

const userAuth = new mongoose.Schema({
    email:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

 const User = mongoose.model('userData',userAuth)

 module.exports = User;