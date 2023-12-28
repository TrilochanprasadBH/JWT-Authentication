const mongoose =require("mongoose");

const UserSchema= mongoose.Schema({
    name: String,
    username: String,
    email:String, 
    phone:String,
    password:String
},{
    versionKey:false 
})

const UserModel = mongoose.model("user", UserSchema)

module.exports={
    UserModel
}
