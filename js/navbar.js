// js/navbar.js

document.addEventListener("DOMContentLoaded", function () {
    // Cargar el archivo navbar.html y colocarlo en el contenedor
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            gestionarNavbar();
        })
        .catch(error => console.error("Error al cargar el navbar:", error));
});

// Función para gestionar el estado del navbar según el rol y estado de sesión
function gestionarNavbar() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userRole = localStorage.getItem("userRole");

    const seccionesLogeado = document.querySelectorAll(".logeado");
    const seccionesNoLogeado = document.querySelectorAll(".no-logeado");
    const adminLink = document.querySelector(".admin-only");

    // Mostrar/ocultar enlaces según el estado de sesión y rol
    if (isLoggedIn) {
        seccionesLogeado.forEach(el => el.style.display = "block");
        seccionesNoLogeado.forEach(el => el.style.display = "none");

        // Mostrar el enlace de admin solo si el usuario es administrador
        if (userRole === "admin") {
            adminLink.style.display = "block";
        } else {
            adminLink.style.display = "none";
        }

        // Añadir función de cierre de sesión
        document.getElementById("logout").addEventListener("click", cerrarSesion);
    } else {
        seccionesLogeado.forEach(el => el.style.display = "none");
        seccionesNoLogeado.forEach(el => el.style.display = "block");
        adminLink.style.display = "none"; // Ocultar el enlace de admin si no está logueado
    }
}

// Función para cerrar sesión
function cerrarSesion(event) {
    event.preventDefault();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
}
