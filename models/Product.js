const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product name is required"]
    },
    maincategory:{
        type:String,
        required:[true,"Product Maincategory is required"]
    },
    subcategory:{
        type:String,
        required:[true,"Product Subcategory is required"]
    },
    brand:{
        type:String,
        required:[true,"Product Brand is required"]
    },
    color:{
        type:String,
        required:[true,"Product Color is required"]
    },
    size:{
        type:String,
        required:[true,"Product Size is required"]
    },
    baseprice:{
        type:Number,
        required:[true,"Product Base Price is required"]
    },
    discount:{
        type:Number,
        default:0
    },
    finalprice:{
        type:Number,
        required:[true,"Product Final Price is required"]
    },
    stock:{
        type:String,
        default:"In stock"
    },
    description:{
        type:String,
        default:"This is sample product"
    },
    pic1:{
        type:String,
        default:""
    },
    pic2:{
        type:String,
        default:""
    },
    pic3:{
        type:String,
        default:""
    },
    pic4:{
        type:String,
        default:""
    }
})

const Product = new mongoose.model("Product",ProductSchema)
module.exports = Product