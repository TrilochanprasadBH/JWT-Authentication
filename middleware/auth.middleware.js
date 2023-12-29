const jwt = require("jsonwebtoken");
const {blacklist} = require("../config/blacklist");

require("dotenv").config();

const auth =(req,res,next)=>{
   const token= req.headers.authorization?.split(" ")[1];
   console.log(token,"token chekc in auth");
   console.log(blacklist, "blacklist in auth");
    if(token){
            if(blacklist.includes(token)){
                res.json({message:"please login again"});
            }
            try {
                const decoded = jwt.verify(token, process.env.SECRET)
                if(decoded){
                    next()
                }else{
                    res.status(400).json({message:"Token is not verified, use correct one"})
                }
            } catch (error) {
                res.json({message:error.message});
            }
        
        }else{
        res.json({message:"Kindly, login first! "})
    }
    
}

module.exports={
    auth 
}