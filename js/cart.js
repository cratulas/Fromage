// Mostrar los productos del carrito y el total de la compra
function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    const cartTotalElement = document.getElementById("cart-total");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p class='text-center'>El carrito está vacío.</p>";
        cartTotalElement.textContent = "Total: $0.00";
        return;
    }

    cart.forEach((product, index) => {
        total += product.price; 
        const productElement = document.createElement("div");
        productElement.className = "col-md-4";
        productElement.innerHTML = `
            <div class="card mb-4">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">$${product.price.toFixed(2)}</p>
                    <button class="btn btn-danger" onclick="removeFromCart(${index})">Eliminar</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(productElement);
    });

    // Mostrar el total de la compra
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Eliminar el producto en la posición indicada
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Actualizar el carrito en la pantalla
}

// Simulación de proceso de pago
function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de proceder.");
        return;
    }
    localStorage.removeItem("cart");
    alert("¡Gracias por tu compra! El pedido ha sido procesado.");
    displayCart(); 
}

document.addEventListener("DOMContentLoaded", displayCart);
