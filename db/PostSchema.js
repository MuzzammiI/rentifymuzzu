const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema(
    {
        propertyName:String,
        propertyPlace:String,
        propertyArea:String,
        bedroom:Number,
        bathroom:Number,
        hospital:Number,
        college:Number

    }
)

module.exports=mongoose.model('property_details',PostSchema);