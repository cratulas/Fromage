// Validación de la contraseña
function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasNumber &&
        hasSpecialChar
    );
}

// Evento de modificación del perfil
document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, intenta de nuevo.");
        return;
    }

    if (!validatePassword(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial.");
        return;
    }

    // Actualizar los datos del usuario en localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.email === email);

    if (currentUser) {
        currentUser.name = name;
        currentUser.password = password;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Los cambios se han guardado correctamente.");
        window.location.href = "index.html";
    } else {
        alert("No se encontró un usuario con este correo.");
    }
});
