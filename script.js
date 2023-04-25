const productsContainer = document.getElementById('products');

// Fetch product information from server
fetch('/api/products')
  .then(response => response.json())
  .then(products => {
    // Display product information on website
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <p>Price: $${product.price}</p>
        <p>Inventory: ${product.inventory}</p>
      `;
      productsContainer.appendChild(productElement);
    });
  });
