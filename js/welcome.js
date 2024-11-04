document.addEventListener("DOMContentLoaded", function() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userEmail = localStorage.getItem("userEmail");

    if (isLoggedIn && userEmail) {
        // Mostrar el mensaje de bienvenida con el correo del usuario
        const welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.textContent = `¡Bienvenido, ${userEmail}!`;
        welcomeMessage.style.display = "block"; 
    }
});
