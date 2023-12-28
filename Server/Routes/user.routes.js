const express= require("express");
const userRouter= express.Router();



//these are my routes for login and signup 

userRouter.post("/signup", async(req,res)=>{
    
})


userRouter.post("login", async(req,res)=>{

})


module.exports={
    userRouter
}