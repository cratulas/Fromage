
// Usuarios predefinidos
const defaultUsers = [
    { email: "usuario@example.com", password: "usuario123", role: "usuario" },
    { email: "admin@example.com", password: "admin123", role: "admin" }
];

// Función para validar la contraseña
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


document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;


    if (!validatePassword(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial.");
        return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = storedUsers.some(user => user.email === email) ||
                       defaultUsers.some(user => user.email === email);

    if (userExists) {
        alert("Este correo electrónico ya está registrado. Intenta con otro.");
    } else {
        const newUser = { name, email, password, role };
        storedUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(storedUsers));

        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        window.location.href = "login.html";
    }
});
