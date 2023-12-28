const express= require("express");
const userRouter= express.Router();
const {UserModel}= require("../model/users.model");
const bcrypt= require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minute allowed
    max: 100,  //100 req per window is allowed
  });
  userRouter.use(limiter);

//these are my routes for login and signup 

userRouter.post("/signup", async(req,res)=>{
    const {name, username, email, password, phone}= req.body 
    try {
        let existingUser  = await UserModel.findOne({email});
        if(existingUser){
            res.status(400).json({message:"Email already exists"});
        }else{
            bcrypt.hash(password, 10, async(err, hash)=>{
                if(err){
                    res.status(400).json({message:err.message})
                }else{
    
                    try {
                    
                        let newUser  = new UserModel({email,password:hash, name, username, phone});
                        await newUser.save();
                        res.status(201).json({message:"Email successfully registered", newUser:{name,username,email,password,phone}});
                
                    } catch (err) {
                        res.status(400).json({message:err.message})
                    }
                }
    
            }); 
        }
        
      
    } catch (error) {
        res.status(500).json({message:error.message});
    }
})


userRouter.post("/login", async(req,res)=>{
    
    const {email,password} =req.body 
    try {
        const user = await UserModel.findOne({email})
       
        if(user){
            bcrypt.compare(password, user.password, (err, result)=> {
                //if the result is true then 
                    if(result){
                        //username here is random payload given by me 
                        var token = jwt.sign({ username: user.username  }, process.env.JWT_SecretKey,{
                            expiresIn: '15m'
                            //token expiry 
                        });
                        
                        res.status(200).json({msg:"login successful", token:token});
                    }else{
                        res.status(200).json({msg:"wrong credentials"});
                    }
            }); 
            
        }else{
            res.status(400).json({err:"user not found"})
        }
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports={
    userRouter
}