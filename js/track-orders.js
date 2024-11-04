document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userRole = localStorage.getItem("userRole");
    const userEmail = localStorage.getItem("userEmail");

    if (!isLoggedIn) {
        alert("Por favor, inicia sesión para ver el tracking de tus órdenes.");
        window.location.href = "login.html";
        return;
    }

    loadOrders(userRole, userEmail);
});

function loadOrders(role, email) {
    const ordersContainer = document.getElementById("orders-table");
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    ordersContainer.innerHTML = ""; 

    // Filtrar órdenes según el rol del usuario
    const filteredOrders = role === "admin" ? orders : orders.filter(order => order.user === email);

    // Mostrar las órdenes en la tabla
    filteredOrders.forEach(order => {
        const row = document.createElement("tr");

        // Mostrar los productos como lista en una sola celda
        const productsList = order.products.map(product => `${product.name} - $${product.price}`).join("<br>");

        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.user}</td>
            <td>${productsList}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td>${order.status}</td>
        `;

        ordersContainer.appendChild(row);
    });
}
