const {User,validate} = require('../models/user')
const express = require('express')
const fs=require("fs")

exports.getUserDetails=async(req,res)=>{
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

   // Check if this user already exisits
    const user = await User.findOne({ email: req.body.email });
    if (User) {
        return res.status(400).send('That user already exisits!');
    } else 
    {
        // Insert the new user if they do not exist yet
       const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await user.save();
        res.send(user);
    }

}