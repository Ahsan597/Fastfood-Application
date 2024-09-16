const mongoose = require("mongoose")
let FoodsSchema = mongoose.Schema({
    name:{
        type: String,
    },
    price:{
        type:String
    },
    type:{
        type:String
    }
})
module.exports = mongoose.model("Foods", FoodsSchema)