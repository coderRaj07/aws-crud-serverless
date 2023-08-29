const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,'Please add a name']
    },
    email:{
        type:String,
        required:[true,'Please add an email'],
        unique: true,
        validator: [validator.isEmail,"Entered email is Invalid"],
    },
    password:{
        type:String,
        required:[true,'Please set a password'],
        uminLength: 6,
        select: false,
    }
})
//Before saving the password into mongoDB, let's hash it
UserSchema.pre('save',async function(next){
    this.password = bcrypt.hashSync(this.password,10);
    next();
})
module.exports = mongoose.model('User',UserSchema);