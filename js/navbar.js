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

// Función para gestionar el estado del navbar según el estado de sesión
function gestionarNavbar() {
    const logeado = localStorage.getItem("isLoggedIn") === "true";
    const seccionesLogeado = document.querySelectorAll(".logeado");
    const seccionesNoLogeado = document.querySelectorAll(".no-logeado");

    if (logeado) {
        seccionesLogeado.forEach(el => el.style.display = "block");
        seccionesNoLogeado.forEach(el => el.style.display = "none");
        document.getElementById("logout").addEventListener("click", cerrarSesion);
    } else {
        seccionesLogeado.forEach(el => el.style.display = "none");
        seccionesNoLogeado.forEach(el => el.style.display = "block");
    }
}

// Función para cerrar sesión
function cerrarSesion(event) {
    event.preventDefault();
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "login.html";
}
