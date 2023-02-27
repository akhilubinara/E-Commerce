// 1. import mongoose
const mongoose = require('mongoose');

//2. Define connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to MongoDB');
})

// 3. create model
const Product = mongoose.model('Product',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    catagory:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }
})
const Wishlist = mongoose.model('Wishlist',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    image:String,
})
// 4. Export
module.exports={
    Product,
    Wishlist
} 