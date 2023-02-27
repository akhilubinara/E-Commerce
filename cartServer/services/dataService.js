const db = require('./db')

//get all the products from db

const getProducts=()=>{
   return db.Product.find()
   .then((result)=>{
    if(result){
        return{
            status:true,
            statusCode:200,
            products:result
        }
    }
    else{
        return{
            status:false,
            statusCode:404,
            message:'no products found'
        }
    }
   })
}
//add to wishlist
const addtowishlist=(id,title,price,image,description)=>{
    // data added to mongodb -- create model

    return db.Wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                     status:true,
                     statusCode:200,
                     message:"Product already exist"
                }
            }
            else{
                const newProduct = new db.Wishlist({id,title,price,image,description}) 
                newProduct.save();
                return{
                    status:true,
                    statusCode:200,
                    message:"Product added to wishlist"
               }
            }
        }
    )
}

const getwishlist=()=>{
    return db.Wishlist.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:true,
                    statusCode:200,
                    message:"Your Wishlist is empty"
                }
            }
        }
    )
}
//delete from wishlist
deletewish=(id)=>{
  return db.Wishlist.deleteOne({id}).then(
    (result)=>{
        if(result){
            // return{
            //     status:true,
            //     statusCode:200,
            //     message:"Item deleted Successfully"
            // }
            return db.Wishlist.find().then(
                (result)=>{
                    if(result){
                        return{
                            status:true,
                            statusCode:200,
                            Wishlist:result,
                            message:"Product added to cart"
                        }
                    }
                    else{
                        return{
                            status:flase,
                            statusCode:400,
                            message:"Product not found"
                        }
                    }
                }
            )
        }
        else{
            return{
                status:true,
                statusCode:400,
                message:"Product not found"
            }
        }
    }
  )  
}


module.exports={
    getProducts,
    addtowishlist,
    getwishlist,
    deletewish
}