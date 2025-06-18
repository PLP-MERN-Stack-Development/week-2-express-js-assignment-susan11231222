//task1
const express = require('express');
const products = express();
const port = 3200;
 
const productRoutes = require('./routes.js'); 

app.use(express.json());
app.use('/products', productRoutes); 




produts.listen(port, () => {
  console.log('Server running on port 3200');
});
