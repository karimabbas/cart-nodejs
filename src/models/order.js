const mongoose = require('mongoose')

const orderschema = new mongoose.Schema({
    user :{
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User' 
    },
    name:{
        type: String ,
        required : true ,
    } ,
    cart :{
        type : Object ,
        required : true ,
    },
    address :{
        type : String ,
        required : true ,
    }
})

const Order = mongoose.model('Order' ,orderschema)
module.exports = Order
