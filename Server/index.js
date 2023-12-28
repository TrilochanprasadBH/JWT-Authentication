const express = require("express");

const app = express();
app.use(express.json()); 

//these are my routes for login and signup 

app.post("/signup", async(req,res)=>{
    
})


app.post("login", async(req,res)=>{

})


app.listen(8080,()=>{
    console.log("port is running on 8080")
})