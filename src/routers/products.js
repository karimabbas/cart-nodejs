const express = require('express')
const router = new express.Router()
const Products = require('../models/products')
const Cart = require('../models/cart')
const cart = require('../models/cart')


///////////////For Adding products  //////////////////////

router.post('/products' , async(req , res)=>{

    const product = new Products(req.body)

    try{
        await product.save()
        res.status(201).send(product)
    }catch(e){
        res.status(400).send(e)
    }
}) 



///////////////////////////////// Find product by id and adding to Cart for User ////////////

router.get('/add-to-cart/:id', function (req, res) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function (err, product) {
        if(err) {
            return res.redirect('/');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        res.send(eq.session.cart)
    })
});



module.exports = router