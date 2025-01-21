var express = require('express');
var router = express.Router();
let productHelper = require('../helpers/product-helpers');
const productHelpers = require('../helpers/product-helpers');

/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllProducts().then((product) => {
    console.log(product)
    res.render('admin/view-products', { admin: true, product })
  })
});
router.get('/add-product', (req, res) => {
  res.render('admin/add-product')
})


router.post('/add-product', (req, res) => {

  productHelper.addProduct(req.body, (id) => {
    let image = req.files.image
    console.log(id)
    image.mv('/product-images/' + id + '.jpg', (err) => {
      if (!err) {
        res.render('admin/add-product')
      } else {
        console.log(err)
      }

    })
  })

})
router.get('/delete-product/:id',(req,res)=>{
    let productId=req.params.id
    console.log(productId)
    productHelpers.deleteProduct(productId).then((response)=>{
      res.redirect('/admin/')
    })
})


module.exports = router;
