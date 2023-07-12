const mongoose = require('mongoose')

const CheckoutSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User id is required"]
    },
    mode: {
        type: String,
        default:"COD"
    },
    status: {
        type: String,
        default:"Order Placed"
    },
    paymentstatus: {
        type: String,
        default:"Pending"
    },
    totalAmount: {
        type: Number,
        required: [true, "Checkout Total amount is required"]
    },
    shippingAmount: {
        type: Number,
        required: [true, "Shipping Charges amount is required"]
    },
    finalAmount: {
        type: Number,
        required: [true, "Checkout Final Price amount is required"]
    },
    rppid:{
        type:String,
        default:""
    },
    date:{
        type:String,
        default:""
    },
    products: [{
        productid: {
            type: String,
            required: [true, "Product id is required"]
        },
        name: {
            type: String,
            required: [true, "Product name is required"]
        },
        color: {
            type: String,
            required: [true, "Product Color is required"]
        },
        size: {
            type: String,
            required: [true, "Product Size is required"]
        },
        maincategory: {
            type: String,
            required: [true, "Product Maincategory is required"]
        },
        subcategory: {
            type: String,
            required: [true, "Product Subcategory is required"]
        },
        brand: {
            type: String,
            required: [true, "Product Brand is required"]
        },
        price: {
            type: Number,
            required: [true, "Product Price is required"]
        },
        qty: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            required: [true, "Total Price is required"]
        },
        pic: {
            type: String,
            default: ""
        }
    }]
})

const Checkout = new mongoose.model("Checkout", CheckoutSchema)
module.exports = Checkout