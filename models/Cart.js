const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:[true,"User id is required"]
    },
    productid:{
        type:String,
        required:[true,"Product id is required"]
    },
    name:{
        type:String,
        required:[true,"Product name is required"]
    },
    color:{
        type:String,
        required:[true,"Product Color is required"]
    },
    size:{
        type:String,
        required:[true,"Product Size is required"]
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
    price:{
        type:Number,
        required:[true,"Product Price is required"]
    },
    qty:{
        type:Number,
        default:1
    },
    total:{
        type:Number,
        required:[true,"Total Price is required"]
    },
    pic:{
        type:String,
        default:""
    } 
})

const Cart = new mongoose.model("Cart",CartSchema)
module.exports = Cart