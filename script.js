function showDetails(productId) {
  const productName = document.querySelector(`#${productId} h3`).textContent;
  const productDescription = document.querySelector(`#${productId} p`).textContent;
  const productLink = document.querySelector(`#${productId} a`).getAttribute('href');
  
  document.querySelector('#productName').textContent = productName;
  document.querySelector('#productDescription').textContent = productDescription;
  document.querySelector('#productLink').setAttribute('href', productLink);
  
  document.querySelector('#productDetails').style.display = 'block';
}
