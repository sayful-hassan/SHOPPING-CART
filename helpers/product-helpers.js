let db=require('../config/connection')
let collection=require('../config/collections')
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
    }
}