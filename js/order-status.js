// js/order-status.js

document.addEventListener("DOMContentLoaded", function() {
    const orderId = localStorage.getItem("currentOrderId");
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const order = orders.find(order => order.id === parseInt(orderId));

    if (order) {
        displayOrderInfo(order);
    } else {
        document.getElementById("order-info").textContent = "Orden no encontrada.";
    }
});

function displayOrderInfo(order) {
    const productsList = order.products.map(product => `${product.name} - $${product.price}`).join("<br>");
    const orderInfoElement = document.getElementById("order-info");

    orderInfoElement.innerHTML = `
        <strong>ID de Orden:</strong> ${order.id}<br>
        <strong>Usuario:</strong> ${order.user}<br>
        <strong>Productos:</strong><br>${productsList}<br>
        <strong>Total:</strong> $${order.total.toFixed(2)}<br>
        <strong>Estado:</strong> En preparación
    `;
}
