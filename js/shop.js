
const products = [
    { id: 1, name: "Queso Bleu", price: 5.99, img: "img/bleu.jpg" },
    { id: 2, name: "Queso Comte", price: 6.99, img: "img/comte.jpg" },
    { id: 3, name: "Quesos surtidos", price: 8.99, img: "img/new_cheeses.jpg" },
    { id: 4, name: "Queso Brie", price: 7.99, img: "img/brie.jpg" },
    { id: 5, name: "Queso Camembert", price: 9.99, img: "img/camembert.jpg" },
    { id: 6, name: "Queso Roquefort", price: 12.99, img: "img/roquefort.jpg" },
];

// Mostrar productos en la tienda
function displayProducts() {
    const productsContainer = document.getElementById("products-container");
    productsContainer.innerHTML = ""; // Limpiar productos anteriores
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

// Agregar producto al carrito
function addToCart(productId) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
        alert("Por favor, inicia sesión para agregar productos al carrito.");
        return;
    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} ha sido agregado al carrito.`);
}

// Buscar productos
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

document.addEventListener("DOMContentLoaded", displayProducts);
