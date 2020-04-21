const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/config').get(process.env.NODE_ENV)

const SALT_I = 10;

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        required:true,
        minlenght:6
    },
    role:{
        type:String,
        default:0
    },
    token:{
        type:String
    }
})

userSchema.pre('save',(next)=>{
    let user = this;

    if(user.isModified('password')){
        bcrypt.genSalt(SALT_I,(err,salt)=>{
            if(err) return next(err);

            bcrypt.hash(user.password,salt,(err,hash)=>{
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
    } else{
        next()
    }
})

const User = mongoose.model("User",userSchema)

module.exports = {User}