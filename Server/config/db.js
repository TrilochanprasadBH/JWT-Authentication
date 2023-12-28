const mongoose= require("mongoose");

const connection= mongoose.connect(`mongodb+srv://masai:masai@cluster0.9kw2uno.mongodb.net/?retryWrites=true&w=majority`)

module.exports={
    connection
}