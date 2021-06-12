const mongoose = require('mongoose')

const productsschema = new mongoose.Schema({
    name: {
        type :String ,
        required : true ,
    } ,

    price : { 
        type :Number ,
        required : true ,
    } ,

    description : {
        type : String ,
        required : true ,
    }
})


const Products = mongoose.model('Products' , productsschema)

module.exports = Products 