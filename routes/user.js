var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"I PHONE 16",
      category:"Mobile",
      description:"Advanced features, powerful performance, sleek design, iOS ecosystem",
      image:"https://www.cnet.com/a/img/resize/b8f872ad3c40aabc68bc88ac8a79b1470ed7b9c6/hub/2024/05/07/0ceb2dd9-4fc6-417e-9042-f58b36fab653/iphone-16-rumors-00000.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
      name:"GOOGLE PIXEL 9 PRO",
      category:"Mobile",
      description:"Exceptional camera, clean Android experience, AI integration",
      image:"https://media.croma.com/image/upload/v1724267254/Croma%20Assets/Communication/Mobiles/Images/309159_10_r0cs6m.png"
      
    },
    {
      name:"ONE PLUS 9 PRO",
      category:"Mobile",
      description:"Speedy performance, Hasselblad camera, smooth OxygenOS interface",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpiM_N-VQdP4Ezf-0oY1qfZIQPu1uGEApoIA&s"
      
    },
    {
      name:"SAMSUNG GALAXY s21 ULTRA",
      category:"Mobile",
      description:"Premium build, versatile camera, 120Hz display, powerful chipset",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjriAo0I18vAXK-CroQd72RU2qTLjCpLtX_g&s"
      
    }
  ]
  res.render('index', {products,admin:false});
});

module.exports = router;
 