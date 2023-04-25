const express = require('express');
const app = express();

// Serve static files
app.use(express.static('public'));

// API endpoint for product information
app.get('/api/products', (req, res) => {
  const products = [
    { name: 'Product 1', price: 10, inventory: 5, image: 'product1.jpg' },
    { name: 'Product 2', price: 20, inventory: 10, image: 'product2.jpg' },
    { name: 'Product 3', price: 30, inventory: 15, image: 'product3.jpg' }
  ];
  res.json(products);
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
