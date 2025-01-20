let db = require('../config/connection')
let collection = require('../config/collections')
const bcrypt = require('bcrypt')

module.exports = {
    doSignUp:(userData) => {
        return new Promise(async(resolve,reject)=>{
            userData.password=await bcrypt.hash(userData.password,10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData)
            .then((data)=>{
                resolve(data.ops[0])
            })
        })
    }
};

       