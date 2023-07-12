const mongoose = require('mongoose')

const BrandSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:[true,"Brand name is required"]
    }
})

const Brand = new mongoose.model("Brand",BrandSchema)
module.exports = Brand