const express = require("express");
const {connection} = require("./config/db");
const {userRouter} = require("./Routes/user.routes");
require("dotenv").config();
const {contentRouter}= require("./Routes/protected.routes")

const app = express();
app.use(express.json()); 
app.use("/users", userRouter);
app.use("/content", contentRouter);



app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(`port is running on ${process.env.PORT} , connected to Db`)
    } catch (error) {
     console.log(error,"something went wrong");   
    }
})

