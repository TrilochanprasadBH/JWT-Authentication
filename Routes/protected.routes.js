const express = require("express");
const jwt = require("jsonwebtoken");
const {auth} = require("../middleware/auth.middleware");

const contentRouter = express.Router();

contentRouter.get("/home", auth, async(req,res)=>{
    try {
        res.status(200).json({message:"You have access, you are logged in with token"})
    } catch (error) {
        res.status(400).json({message:error.message});
    }
})


module.exports={
    contentRouter
}