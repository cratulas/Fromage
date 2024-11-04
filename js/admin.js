
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario está logueado y si es administrador
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userRole = localStorage.getItem("userRole");

    if (!isLoggedIn || userRole !== "admin") {
        // Redirigir a la página de inicio si no es administrador
        alert("Acceso denegado. Necesitas permisos de administrador para acceder a esta página.");
        window.location.href = "index.html";
        return;
    }

    loadAdminData();
});

// Datos de administración
function loadAdminData() {
    const totalUsers = JSON.parse(localStorage.getItem("users"))?.length || 0;
    const totalSales = JSON.parse(localStorage.getItem("cartHistory"))?.length || 0;
    const totalRevenue = calculateTotalRevenue();

    document.getElementById("total-users").textContent = totalUsers;
    document.getElementById("total-sales").textContent = totalSales;
    document.getElementById("total-revenue").textContent = `$${totalRevenue.toFixed(2)}`;
}

// Función para calcular ingresos totales (ejemplo)
function calculateTotalRevenue() {
    const cartHistory = JSON.parse(localStorage.getItem("cartHistory")) || [];
    return cartHistory.reduce((total, cart) => {
        const cartTotal = cart.reduce((cartSum, product) => cartSum + product.price, 0);
        return total + cartTotal;
    }, 0);
}

// Opciones adicionales (ejemplos)
function manageProducts() {
    alert("Función para gestionar productos.");
}

function manageUsers() {
    alert("Función para gestionar usuarios.");
}
