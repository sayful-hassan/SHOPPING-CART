var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers');


/* GET home page. */
router.get('/', function(req, res, next) {
  
productHelpers.getAllProducts().then((product) => {
    console.log(product)
    res.render('user/view-products', { admin:false, product })
  })
});

module.exports = router;
 