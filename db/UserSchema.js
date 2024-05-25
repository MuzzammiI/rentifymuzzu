const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        
        firstname:String,
        lastname:String,
        email:String,
        password:String,
        mobileno:String,
        address:String
    }
)

module.exports=mongoose.model('users',UserSchema);