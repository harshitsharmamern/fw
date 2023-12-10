const router = require('express').Router();
const pmodel = require('../database/productadd')


router.post('/productadd',async(req,res)=>{
    // req.body?
    try{
      const newproduct =  await pmodel.create(req.body)
      res.status(201).json({success:true,message: "product added succes"})
    }catch{
        res.json("error in catch")
    }

})

router.get('/allproduct',async(req,res)=>{
    try{
        const product =  await pmodel.find()
        res.json({data:product,message:"data recive success"})
    }catch{
        res.json({message:"error in catch backend"})
    }
})


module.exports = router;