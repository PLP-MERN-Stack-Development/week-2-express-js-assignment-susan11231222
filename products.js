const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name: String,
  description: String,
  price: Number,
  category: String,
  instock: Boolean
})
module.exports=productSchema;