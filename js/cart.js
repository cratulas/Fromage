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



function checkout() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const userEmail = localStorage.getItem("userEmail");

    if (cart.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de proceder.");
        return;
    }

    // Generar una nueva orden
    const orderId = new Date().getTime(); // ID único basado en la hora actual
    const orderTotal = cart.reduce((total, product) => total + product.price, 0);
    const newOrder = {
        id: orderId,
        user: userEmail,
        products: cart,
        total: orderTotal,
        status: "Pendiente"
    };

    // Guardar la orden en localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Vaciar el carrito y mostrar confirmación
    localStorage.removeItem("cart");
    alert("¡Gracias por tu compra! La orden ha sido registrada.");
    displayCart(); 
}


document.addEventListener("DOMContentLoaded", displayCart);
