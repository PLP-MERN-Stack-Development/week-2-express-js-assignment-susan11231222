const express=require('express')
const routers=express.Router();
const route=require('./products.js');
routers.post('/', async (req, res) => {
    try{const newproduct=new  product(req.body);
      const saveproduct= await newproduct.save()
      res.status(200).json(savedproduct);





    }catch(err){
res.status(500).send(`An error in your code`)
    }
routers.get('/',async(req,res)=>{
try{const productget=await product.find();
res.status(200).json(productget);



}catch (err) {
    res.status(500).json({ message: err.message });
  }






})
routers.get('/:id',async(req,res)=>{
try{const singleproduct= await product.findById(req.params.id);
if(!singleproduct){
    res.status(404).json('Product not found');




}
res.status(200).send(singleproduct);




}});
//update
routers.put('/:id',async (req,res)=>{
const changeproduct=await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
if(!changeproduct){
    res.status(404).send(`product not found`)



}
res.status(200).send(changeproduct)
}
)

})

routers.delete('/:id',async (req,res)=>{
    try{const deleteproduct=await product.findByIdAndDelete(req.params.id);
    if(!deleteproduct){
        res.send(401).send(`Product not found`);




    }
    res.send(200).send(`Product deleted successfully`)
}})
module.exports=routers;
