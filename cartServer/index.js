const express = require('express')

const cors=require('cors')

const dataService = require('./services/dataService')

const app=express()

//to parse jSON
app.use(express.json())

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

app.use(cors({
    origin:'http://localhost:4200'
}))

//api to add all products

app.get('/all-products', (req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

app.post('/addtowishlist',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        (result)=>{
        res.status(result.statusCode).json(result);
    })
})

//to get wishlist products
app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to delete wish
app.delete('/deletewish/:id',(req,res)=>{
    dataService.deletewish(req.params.id)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

