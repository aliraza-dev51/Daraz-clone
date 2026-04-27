async function getProducts() {
    const products = await fetch('https://dummyjson.com/products?limit=30');
    const data = await products.json();
    console.log(data);
    displayProducts(data.products);

    
}
getProducts();

 displayProducts = (products) => {
    const productsContainer = document.querySelector('.products-container');
    products.map(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('card');  
        productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>     


        `;
        productsContainer.appendChild(productCard);
    }
    )
} 
        

    
    
