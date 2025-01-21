let db=require('../config/connection')
let collection=require('../config/collections')
const { response } = require('../app')
let objectId=require('mongodb').ObjectID

module.exports={
    addProduct:(product,callback)=>{

        db.get().collection('product').insertOne(product).then((data)=>{
            callback(data.insertedId)


        })
    },
    getAllProducts:()=>{
        return new Promise(async(resolve,reject)=>{
            let product=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(product)

        })
    },
    deleteProduct:(productId)=>{
        return new Promise((resolve,reject)=>{
            console.log(productId)
            console.log(objectId(productId))
            db.get().collection(collection.PRODUCT_COLLECTION).removeOne({_id:objectId(productId)})
            .then((response)=>{
                resolve(response)
            })
        })
    },
    getProductDetails:(productId)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION).findOne({_id:objectId(productId)})
            .then((product)=>{
                resolve(product)
            })
        })
    },
    updateProduct:(productId,productDetails)=>{
        return new Promise((resolve,reject)=>{
            db.get().collection(collection.PRODUCT_COLLECTION)
            .updateOne({_id:objectId(productId)},{
                $set:{
                    name:productDetails.name,
                    description:productDetails.description,
                    price:productDetails.price,
                    category:productDetails.category
                }
            }).then((response)=>{

                resolve()
            })
        })
    }
}