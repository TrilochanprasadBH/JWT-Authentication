const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth =(req,res,next)=>{
   const token= req.headers.authorization?.split(" ")[1];
   console.log(token);
    if(token){
        try {
            const decoded = jwt.verify(token, process.env.JWT_SecretKey)
            if(decoded){
                next()
            }else{
                res.status(400).json({message:"Token is not verified, use correct one"})
            }
        } catch (error) {
            res.json({message:error.message});
        }
    }else{
        res.json({message:"Kindly ,first Login to get access"})
    }
    
}

module.exports={
    auth 
}