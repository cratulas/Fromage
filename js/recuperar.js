// Simulación de recuperación de contraseña
document.getElementById("recoverForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email);

    if (user) {
        alert(`Se han enviado las instrucciones de recuperación al correo: ${email}`);
        // Simulación de envío de recuperación (solo en frontend)
    } else {
        alert("No se encontró un usuario con este correo electrónico.");
    }
});
