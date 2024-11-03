// js/app.js
const products = [
    { id: 1, name: "Queso Gouda", price: 5.99, img: "img/gouda.jpg" },
    { id: 2, name: "Queso Cheddar", price: 6.99, img: "img/cheddar.jpg" },
    { id: 3, name: "Queso Parmesano", price: 8.99, img: "img/parmesano.jpg" },
    { id: 4, name: "Queso Parmesano", price: 8.99, img: "img/parmesano.jpg" },
    { id: 5, name: "Queso Parmesano", price: 8.99, img: "img/parmesano.jpg" },
    { id: 6, name: "Queso Parmesano", price: 8.99, img: "img/parmesano.jpg" },
];

function displayProducts() {
    const productsContainer = document.getElementById("products-container");
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "col-md-4";
        productElement.innerHTML = `
            <div class="card mb-4">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al Carrito</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Llama a displayProducts al cargar la página
document.addEventListener("DOMContentLoaded", displayProducts);


// js/app.js
function searchProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = "";

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.className = "col-md-4";
        productElement.innerHTML = `
            <div class="card mb-4">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al Carrito</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}
