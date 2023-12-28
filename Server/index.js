const express = require("express");
const {connection} = require("./config/db");

const app = express();
app.use(express.json()); 

//these are my routes for login and signup 

app.post("/signup", async(req,res)=>{
    
})


app.post("login", async(req,res)=>{

})


app.listen(8080,async()=>{
    try {
        await connection
        console.log(`port is running on 8080 , connected to Db`)
    } catch (error) {
     console.log(error,"something went wrong");   
    }
})

