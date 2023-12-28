const mongoose =require("mongoose");

const userSchema= mongoose.Schema({
    name: String,
    username: String,
    email:String, 
    phone:Number,
    password:String
},
{
    versionKey:false 
})

const UserModel = mongoose.model("user", userSchema)

module.exports={
    UserModel
}
